import axios from 'axios';

const API_KEY = process.env.THEMEALDB_API_KEY;
const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export const getRecipesByIngredients = async (ingredients: string[]) => {
    try {
        const response = await axios.get(API_URL, { 
            params: {
                i: ingredients.join(',')
            }
        });
        return response.data;
        } catch (error) {
            console.error('Error fetching recipes:', error);
            throw new Error('Unable to fetch recipes');
        }
        };