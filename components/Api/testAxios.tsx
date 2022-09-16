import axios from "axios";
const baseUrl = "ttps://api2.plawarn.com";

// Passing configuration object to axios
axios({
  method: "get",
  url: `${baseUrl}/users/1`,
}).then((response) => {
  console.log(response.data);
});

// Invoking get method to perform a GET request
axios.get(`${baseUrl}/users/1`).then((response) => {
  console.log(response.data);
});

export function CallApiAxiso({ navigation }) {
  const baseUrl = "ttps://api2.plawarn.com";
  // Passing configuration object to axios
  axios({
    method: "get",
    url: `${baseUrl}/users/1`,
  }).then((response) => {
    console.log(response.data);
  });
  console.log(data);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoading ? (
        <Text>Loading ...</Text>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            initialParams={{ item: 1 }}
            renderItem={({ item }) => (
              <Text category="h1" style={{ fontSize: 24, color: "black" }}>
                Nmae: {item.name}
                {"\n"}
                Email: {item.phone}
                {"\n"}
              </Text>
            )}
          />
        </View>
      )}
    </View>
  );
}
