// Mock database
const mockDatabase = [
    { id: 1, name: "sok" },
    { id: 2, name: "sao" },
    { id: 3, name: "pisey" }
  ];
  
  // Function to get user info by id (mock asynchronous operation)
  function getUserById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockDatabase.find(user => user.id === id);
        if (user) {
          resolve(user);
        } else {
          reject(new Error(`User with id ${id} not found`));
        }
      }, 2000); // Simulate 2 seconds delay
    });
  }
  
  // Function to process user data (mock asynchronous operation)
  function processUserData(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user) {
          const processedUser = { ...user, name: user.name.toUpperCase() };
          resolve(processedUser);
        } else {
          reject(new Error(`Cannot process null user`));
        }
      }, 1500); // Simulate 1.5 seconds delay
    });
  }
  
  // Nested asynchronous function to execute and process user data
  async function executeAndProcess(userId) {
    try {
      // Step 1: Get user info by id
      const user = await getUserById(userId);
      console.log(`Step 1: Retrieved user info for user with id ${userId}`);
  
      // Step 2: Process user data
      const processedUser = await processUserData(user);
      console.log(`Step 2: Processed user data for user with id ${userId}`);
  
      // Final step: Output the processed user data
      console.log(`Processed User Data:`, processedUser);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  // Example usage: Execute and process user data for user with id 2
  executeAndProcess(2);
  