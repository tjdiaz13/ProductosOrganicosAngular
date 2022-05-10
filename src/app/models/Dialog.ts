import {TweetId} from "./TweetId";

export interface Dialog {
  title: string,
  image: string,
  language: string,
  capital: string,
  countryCode: string,
  currency: string,
  tweets: TweetId[],
  type: string,
  industry: string,
  founded: string,
  revenueYear: string,
  country: string
}
