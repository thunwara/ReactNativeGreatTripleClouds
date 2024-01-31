// AttractionList.js

import React from 'react';
import { FlatList } from 'react-native';
import AttractionCard from './AttractionCard';

const AttractionList = ({ attractions, onAttractionPress }) => {
  return (
    <FlatList
      data={attractions}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <AttractionCard
          name={item.name}
          description={item.description}
          image={item.image}
          onPress={() => onAttractionPress(item.id)}
        />
      )}
    />
  );
};

export default AttractionList;
