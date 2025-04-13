const API_KEY = process.env.REACT_APP_NYT_API_KEY;
const BASE_URL = "https://api.nytimes.com/svc/mostpopular/v2/viewed";

export const fetchArticles = async (period = 1) => {
    try {
        const response = await fetch(`${BASE_URL}/${period}.json?api-key=${API_KEY}`);

        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Failed to fetch articles:", error);
        return [];
    }
};
