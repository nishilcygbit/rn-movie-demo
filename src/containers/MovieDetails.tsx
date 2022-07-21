import React, { useEffect, useState, useCallback } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import LocalImage from '../../assets/images';
import SubTitle from '../components/SubTitle';
import Styles from '../theme/Styles';
import ListSlider from '../components/ListSlider';
import { TextHead, TextSub } from '../components/MovieCard';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';
import ImageWrapper from '../components/ImageWrapper';
import ApiServies from '../services/api/ApiServices';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchList, removeToWatchList } from '../redux/slices/watchListSlice';

const MovieList = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const {
    route: { params },
  } = props;
  const id = params ?? null;
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { activeBookMark, bookmarkWhite } = LocalImage;
  const [details, setDetails] = useState<any>(null);
  const watchList = useSelector((state: any) => state?.watchlist?.watchList);
  const watchListId = useCallback(
    () => watchList.reduce((acc: any, curr: any) => [...acc, curr.id], []),
    [watchList]
  );

  useEffect(() => {
    if (id) {
      (async () => {
        const res = await ApiServies.movieDetails(id);
        setDetails(res);
      })();
    }
  }, []);

  const handleAddOrRemoveToWatchList = () => {
    if (watchListId().includes(details.id)) {
      dispatch(removeToWatchList(details.id));
    } else {
      dispatch(addToWatchList(details));
    }
  };

  const listData = [
    { sort: '1', name: 'top rated' },
    { sort: '2', name: 'popular' },
    { sort: '3', name: 'action' },
    { sort: '4', name: 'drama' },
  ];

  return (
    <SafeAreaProvider style={[{ paddingBottom: insets.bottom }, Styles.flex1, Styles.bgBlack]}>
      <ScrollView contentContainerStyle={[Styles.flexGrow]} style={[]}>
        <View style={[Styles.flex1]}>
          <ImageWrapper url={details?.backdrop_path} styles={[Styles.bannerImg]} />
          <View style={[{ top: -60 }]}>
            <View style={[Styles.flexRow, Styles.flex1, Styles.alignFlexEnd, Styles.paddingH24]}>
              <ImageWrapper
                url={details?.poster_path}
                styles={[Styles.borderRadius10, Styles.cardImg]}
              />
              <View style={[Styles.marginL12, Styles.marginR100]}>
                <SubTitle title={details?.original_title} numLine={2} />
              </View>
            </View>
            <View>
              <ListSlider data={listData} disabled={true} style={[Styles.paddingV4]} />
            </View>
            <View style={[Styles.paddingH24]}>
              <View>
                <Text
                  style={[
                    Styles.PoppinsMedium,
                    Styles.font14,
                    Styles.textWhite,
                    Styles.lineHeight30,
                    Styles.marginB4,
                  ]}
                >
                  About Movie
                </Text>
                <View style={Styles.borderGray}></View>
              </View>
              <View style={[Styles.paddingT12]}>
                <TextHead text={'Overviews'} style={[Styles.marginB4]} />
                <TextSub text={details?.overview} />
              </View>
              <View style={[Styles.paddingT12]}>
                <TextHead text={'Release Date'} />
                <TextSub text={details?.release_date} />
              </View>
              <View style={[Styles.flexRow, Styles.paddingT12]}>
                <View style={[Styles.flex1]}>
                  <TextHead text={'Average Rating'} />
                  <TextSub text={details?.vote_average} />
                </View>
                <View style={[Styles.flex1]}>
                  <TextHead text={'Rate Count'} />
                  <TextSub text={details?.vote_count} />
                </View>
              </View>
              <View style={[Styles.paddingT12]}>
                <TextHead text={'Popularity'} />
                <TextSub text={details?.popularity} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <Footer
          btnLeft
          rightIcon={watchListId().includes(id) ? activeBookMark : bookmarkWhite}
          leftAction={() => {
            navigation.goBack();
          }}
          rightAction={handleAddOrRemoveToWatchList}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default MovieList;
