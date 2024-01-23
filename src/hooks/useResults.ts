import {Dispatch, SetStateAction, useEffect, useState} from 'react';
// import yelp from '../api/yelp';

// TODO:: Mocking Data - delete after completion.
import testData from '../api/test-data.ts';

const useResults = (): [
  (searchTerm?: string) => Promise<void>,
  any[],
  string,
] => {
  const [results, setResults] = useState<Array<any>>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm: string = '') => {
    setErrorMessage('');
    setResults([]);
    // do something with searchTerm
    searchTerm;
    setTimeout(() => {
      setResults(testData.businesses);
    }, 100);
  };

  /*const searchApi = async (searchTerm: string = '') => {
    setErrorMessage('');
    console.log(`searching ${searchTerm}`);
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
      console.log('businesses', response.data.businesses);
    } catch (err: any) {
      setErrorMessage(
        `${err?.message}: ${err?.code}` ?? 'something went wrong',
      );
    }
  };*/

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};

export default useResults;
