import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Styles from '../theme/Styles';
import LocalImage from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import ImageWrapper from './ImageWrapper';
import Colors from '../theme/Colors';
import { addToWatchList, removeToWatchList } from '../redux/slices/watchListSlice';

const MovieCard = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const { data, hideRatingIcon, showReadMore, loading, setHandleRefresh, disableRefresh } = props;
  const { bookMark, star, bookmarkWhite, starWhite } = LocalImage;
  const watchList = useSelector((state: any) => state?.watchlist?.watchList);
  const watchListId = useCallback(
    () => watchList.reduce((acc: any, curr: any) => [...acc, curr.id], []),
    [watchList]
  );

  const [isRefreshing, setIsRefresing] = useState(false);

  const onRefreshing = () => {
    setIsRefresing(true);
    setHandleRefresh(Math.random().toString());
  };

  const handleAddOrRemoveToWatchList = (movie: any) => {
    if (watchListId().includes(movie.id)) {
      dispatch(removeToWatchList(movie.id));
    } else {
      dispatch(addToWatchList(movie));
    }
  };
  useEffect(() => {
    if (!loading) {
      setIsRefresing(false);
    }
  }, [loading]);

  const MovieItem = ({ ...movie }: any): JSX.Element => {
    const { original_title = '', release_date, vote_average, poster_path, id } = movie;

    return (
      <>
        <TouchableOpacity
          style={[Styles.posr, Styles.flexRow, Styles.marginL30, Styles.marginB18]}
          onPress={() => {
            navigation.navigate('MovieDetails', id);
          }}
        >
          <ImageWrapper url={poster_path} styles={[Styles.borderRadius10, Styles.cardImg]} />
          <View style={[Styles.paddingL12, Styles.flex1]}>
            <View style={[Styles.paddingT6]}>
              <TextHead text={'Title'} />
              <TextSub text={original_title} />
            </View>
            <View style={[Styles.paddingT6]}>
              <TextHead text={'Release Date'} />
              <TextSub text={release_date} />
            </View>
            <View style={[Styles.paddingT6]}>
              <TextHead text={'Average Rating '} />
              <TextSub text={vote_average} />
            </View>
          </View>
          <View style={[Styles.paddingR24]}>
            <TouchableOpacity onPress={() => handleAddOrRemoveToWatchList(movie)}>
              <Image
                source={watchListId().includes(id) ? bookMark : bookmarkWhite}
                style={[Styles.cardIcon]}
              />
            </TouchableOpacity>
            {!hideRatingIcon && (
              <Image
                source={watchListId().includes(id) ? star : starWhite}
                style={[Styles.cardIcon, Styles.marginT24]}
              />
            )}
            {!hideRatingIcon && (
              <Text
                style={[
                  Styles.PoppinsRegular,
                  Styles.font12,
                  Styles.lineHeight18,
                  Styles.textCenter,
                  Styles.paddingT12,
                  watchListId().includes(id) ? Styles.textGreen : Styles.textWhite,
                ]}
              >
                {vote_average ?? ''}
              </Text>
            )}
          </View>
          {showReadMore && (
            <TouchableOpacity
              style={[Styles.posa, Styles.readMore]}
              onPress={() => {
                navigation.navigate('MovieDetails', id);
              }}
            >
              <Text
                style={[
                  Styles.PoppinsRegular,
                  Styles.font12,
                  Styles.lineHeight18,
                  Styles.textGreen,
                  Styles.textCenter,
                  Styles.paddingT12,
                ]}
              >
                Read More
              </Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </>
    );
  };

  return !loading || isRefreshing ? (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => <MovieItem {...item} key={index} />}
      contentContainerStyle={[Styles.paddingV16]}
      refreshControl={
        !disableRefresh ? (
          <RefreshControl
            colors={[Colors.black]}
            progressBackgroundColor={Colors.green}
            refreshing={isRefreshing}
            // tintColor={Colors.green}
            onRefresh={onRefreshing}
          />
        ) : undefined
      }
    />
  ) : (
    <ActivityIndicator color={Colors.white} size={'large'} />
  );
};

export const TextHead = ({ text, style }: { text: string; style?: any }) => (
  <Text
    style={[
      Styles.PoppinsMedium,
      Styles.font12,
      Styles.lineHeight18,
      Styles.textWhite,
      Styles.fontWeight500,
      !!style && [...style],
    ]}
  >
    {text}:
  </Text>
);

export const TextSub = ({ text }: { text: string }) => (
  <Text style={[Styles.PoppinsRegular, Styles.font12, Styles.lineHeight18, Styles.textWhite]}>
    {text}
  </Text>
);

export default MovieCard;
