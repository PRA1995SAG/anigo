import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Alert,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../components/Header";
import Card from "../../components/Card";
import FAB from "../../components/FAB";
import Colors from "../../constants/Colors";
import Footer from "../../components/Footer";

import * as ListingActions from "../../store/actions/listings";

import styles from "./style";

const ListingScreen = (props) => {
  const refLimit = useRef(10);
  const refFlatList = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [onEndReached, setOnEndReached] = useState(false);
  const [query, setQuery] = useState("");

  const listings = useSelector((state) => state.listings.listings);

  const dispatch = useDispatch();

  let TouchComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchComponent = TouchableNativeFeedback;
  }

  const queryHandler = (text) => setQuery(text);

  useEffect(() => {
    refLimit.current = 10;
    Keyboard.addListener("keyboardDidShow", setOnEndReached(false));
    // Keyboard.addListener("keyboardDidHide", setOnEndReached(false));
  }, [query]);

  const fetchData = async () => {
    try {
      await dispatch(ListingActions.fetchListings(query, refLimit.current));
    } catch (error) {
      if (error === 1) {
        Alert.alert(
          "Alert",
          "could not complete the request, please search any other anime!",
          [{ text: "Ok" }]
        );
      } else {
        Alert.alert("Alert", "something went wrong!", [{ text: "Ok" }]);
      }
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
      setOnEndReached(false);
    }
  };

  const submitHandler = async () => {
    Keyboard.dismiss();
    if (query) {
      setIsLoading(true);
      fetchData();
    } else {
      return;
    }
  };

  const loadMoreHandler = () => {
    if (refLimit.current < 50) {
      refLimit.current += 10;
      setIsRefreshing(true);
      fetchData();
    } else {
      Alert.alert("Alert", "End of the results!", [{ text: "Ok" }]);
    }
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: () => (
        <Header
          query={query}
          queryHandler={queryHandler}
          submitHandler={submitHandler}
        />
      ),
    });
  }, [props.navigation, query]);

  if (isLoading) {
    return (
      <View style={styles.centeredView}>
        <ActivityIndicator size="large" color={Colors.blue800} />
      </View>
    );
  }

  if (!isLoading && listings.length === 0) {
    return (
      <View style={styles.centeredView}>
        <Text style={{ fontSize: 16, fontFamily: "mukta-regular" }}>
          Search any anime!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={listings}
        ref={refFlatList}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.5}
        extraData={refFlatList}
        onEndReached={() => setOnEndReached(true)}
        showsVerticalScrollIndicator={false}
        onScroll={(e) => {
          const totalHeight = e.nativeEvent.contentSize.height;
          const currentOffsetY = e.nativeEvent.contentOffset.y;
          const showFabScrollOffset = totalHeight - currentOffsetY;
          if (showFabScrollOffset >= 1000) {
            setOnEndReached(false);
          }
        }}
        ListFooterComponent={() => isRefreshing && <Footer />}
        renderItem={({ item }) => (
          <Card imageUrl={item.imageUrl} title={item.title} />
        )}
      />
      {onEndReached && <FAB loadMoreHandler={loadMoreHandler} />}
    </View>
  );
};

export default ListingScreen;
