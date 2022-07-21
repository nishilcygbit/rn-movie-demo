import React, { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../components/Header';
import SubTitle from '../components/SubTitle';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import Styles from '../theme/Styles';

const MovieList = ({ navigation }: any): JSX.Element => {
  const watchList = useSelector((state: any) => state?.watchlist?.watchList);
  useEffect(() => {
    console.log('watchList', watchList);
  }, [watchList]);

  return (
    <SafeAreaProvider style={[Styles.flex1, Styles.bgBlack]}>
      <View style={[Styles.flex1]}>
        <View style={[Styles.marginL30]}>
          <Header title={'Movie App'} />
        </View>
        <View style={[Styles.paddingT24, Styles.marginL30]}>
          <SubTitle title={'Your Watch List'} />
        </View>
        <MovieCard data={watchList} hideRatingIcon showReadMore disableRefresh />
      </View>
      <View>
        <Footer
          btnLeft
          leftAction={() => {
            navigation.goBack();
          }}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default MovieList;
