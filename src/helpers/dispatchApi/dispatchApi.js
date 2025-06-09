export const dispatch = async (methodType,url, values) => {
    try {
      const data = await methodType(url, values);
      return data; // Return the response data for further use if needed
    } catch (error) {
      // Handle the error appropriately here or re-throw if needed
      console.error('Submission error:', error);
      throw error; // Re-throw if you want to handle it at the call site
    }
  };