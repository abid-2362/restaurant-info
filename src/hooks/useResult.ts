import {useEffect, useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeParamList} from '../types';
import testData from '../api/test-data.ts';

const useResult = () => {
  // const navigation: NavigationProp<HomeParamList> = useNavigation();
  const route: RouteProp<HomeParamList, 'RestaurantDetails'> = useRoute();
  const [result, setResult] = useState<any>();

  const getResult = (id: string) => {
    const r = testData.businesses.find(item => item.id === id) || null;
    setResult(r);
  };

  useEffect(() => {
    console.log('looking for restaurant now');
    getResult(route.params.id);
  }, [route.params.id]);

  return [result];
};

export default useResult;
