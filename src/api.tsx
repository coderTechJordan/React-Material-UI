import { User } from './model/user';

const BASE_URL = 'https://j9mhl1rrvc.execute-api.us-east-2.amazonaws.com/dev';

export const saveUser = async (userData: User) => {
  try {
    // Print request details before sending
    console.log('Request Details:', {
      method: 'POST',
      url: `${BASE_URL}/users`,
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(userData),
    });

    const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      // Handle error here, e.g., throw an error or log the response
      throw new Error(`Failed to create user: ${response.status} - ${response.statusText}`);
    }

    // Assuming your API returns the created user data in the response
    const createdUser = await response.json();
    return createdUser;
  } catch (error) {
    // Handle fetch error, e.g., network error
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
};
