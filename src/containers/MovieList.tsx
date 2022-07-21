import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../components/Header';
import SubTitle from '../components/SubTitle';
import ListSlider from '../components/ListSlider';
import MovieCard from '../components/MovieCard';
import LocalImage from '../../assets/images';
import Footer from '../components/Footer';
import Styles from '../theme/Styles';
import ApiServies from '../services/api/ApiServices';

const MovieList = ({ navigation }: any): JSX.Element => {
  const { bookmarkBlueUncheck } = LocalImage;
  const [movies, setMovies] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [handleRefresh, setHandleRefresh] = useState<string>('0');

  // const handleUpcomingMovies = async () => {
  //   try {
  //     const res = await ApiServies.upcomingMovies();
  //     console.log('res', JSON.stringify(res, null, 4));
  //     if (res?.results) {
  //       setMovies(res?.results);
  //     }
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  // const handleTopRatedMovies = async () => {
  //   try {
  //     const res = await ApiServies.topRated();
  //     console.log('res', JSON.stringify(res, null, 4));
  //     if (res?.results) {
  //       setMovies(res?.results);
  //     }
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  const handleGetMoviesForAllApi = async (type: any, loading = true) => {
    try {
      setLoading(loading);
      const res = await type;
      // console.log('res', res);
      if (res?.results) {
        setMovies(res?.results);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  };

  const listData = [
    {
      sort: '1',
      name: 'top rated',
      getMoviesforTab: () => handleGetMoviesForAllApi(ApiServies.topRated()),
    },
    {
      sort: '2',
      name: 'popular',
      getMoviesforTab: () => handleGetMoviesForAllApi(ApiServies.popularMovies()),
    },
    {
      sort: '3',
      name: 'Up Coming',
      getMoviesforTab: () => handleGetMoviesForAllApi(ApiServies.upcomingMovies()),
    },
    {
      sort: '3',
      name: 'Now Playing',
      getMoviesforTab: () => handleGetMoviesForAllApi(ApiServies.nowPlaying()),
    },
  ];

  return (
    <SafeAreaProvider style={[Styles.flex1, Styles.bgBlack]}>
      <View style={[Styles.flex1]}>
        <View style={[Styles.marginL30]}>
          <Header title={'Movie App'} />
          <SubTitle title={'Find your movies'} />
        </View>
        <View style={[Styles.paddingT16, Styles.marginL30]}>
          <SubTitle title={'Categories'} />
        </View>
        <View>
          <ListSlider data={listData} activeItem={0} handleRefresh={handleRefresh} />
        </View>
        <MovieCard data={movies} loading={loading} setHandleRefresh={setHandleRefresh} />
      </View>
      <View>
        <Footer
          rightIcon={bookmarkBlueUncheck}
          rightText={'Watch List'}
          rightAction={() => {
            navigation.navigate('WatchList');
          }}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default MovieList;
