import axios from "axios"; /* its make easy to use http requset method like get post put allow us to comunicate
with API easy */

export const getAstronomyPicOfTheDay = () => {
  return axios.get(" https://api.nasa.gov/planetary/apod", {
    params: { api_key: "wEmxQD8pRmbc9Z4vukkwZlN0lAMUb3GkAmzTnbR6" },
  });
};

/* we make to get requset Nasa open API* will give us what
    we want */

/*params it's could be string,boolean,date you tell exactly which one like api_key its indicates to string */
