const { Stack } = require('expo-router');

const AppLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default AppLayout;
