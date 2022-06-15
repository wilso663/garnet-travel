import React, { Component } from 'react';
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;


const fakeUsers = [{
    "id": 1,
    "name": "Test User 1",
    "username": "testuser1"
  },
  {
    "id": 2,
    "name": "Test User 2",
    "username": "testuser2"
  }
];

describe('App component', () => {
  test('The App component renders', async () => {
    //arrange
    mockedAxios.get.mockResolvedValue({ data: fakeUsers });
    //act
    render(<App/>);
    //assert
    expect(screen.getByText("Users:")).toBeInTheDocument();
  });

  test('The app displays a list of users', async () => {
    mockedAxios.get.mockResolvedValue({data: fakeUsers});
    render(<App/>);

    const userList = await waitFor(() => screen.findByTestId('user-list'));
    expect(userList).toBeInTheDocument();
  });

  test('The app displays a row for each user', async () => {
    mockedAxios.get.mockResolvedValue({data: fakeUsers});
    render(<App/>);
    
    const userList = await waitFor(() => screen.findAllByTestId('user-item'));
    expect(userList).toHaveLength(2);
  });
})
