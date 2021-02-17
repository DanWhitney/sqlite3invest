'use strict';
const path = require('path');
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts',
    opening_and_closing: './src/opening_and_closing.ts',
    connecting_to_a_disk_file_database: './src/connecting_to_a_disk_file_database.ts',
    inserting_data_into_a_sqlite_table: './src/inserting_data_into_a_sqlite_table.ts',
    insert_multiple_rows_into_a_table_at_a_time: './src/insert_multiple_rows_into_a_table_at_a_time.ts',
    querying_all_rows_with_all_method: './src/querying_all_rows_with_all_method.ts',
    query_the_first_row_in_the_result_set: './src/query_the_first_row_in_the_result_set.ts',
    query_rows_with_each_method: './src/query_rows_with_each_method.ts',
    updating_data_example: './src/updating_data_example.ts',
    create_mock_db: './src/encaps/create_mock_db.ts',
    type_orm_exp1: './src/type_orm/experiment1.ts',
    type_orm_exp2: './src/type_orm/experiment2_using_repositories.ts',
    type_orm_exp3: './src/type_orm/experiment2_loading_from_the_database.ts',
    
    experiment2_loading_from_the_database
  },
  devtool: 'inline-source-map',
  target: 'node',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: [nodeExternals()],
};