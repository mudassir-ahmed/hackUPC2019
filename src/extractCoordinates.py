import pandas as pd
import json

# The json file containing  for each country.
data_df = pd.read_json('countriesData.json')

coordinates_df = data_df[['name', 'latlng']].set_index('name')

print(coordinates_df)

coordinates_df.to_json('coordinates.json')