//Async operation testing//

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      setData(json);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return <Text>{data.title}</Text>;
};

export default DataFetcher;