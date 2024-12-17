import { TNulleable } from "./nulleable.type";

export type TCollection = {
  id: string;
  title: string;
  description?: string | null;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  featured: boolean;
  total_photos: number;
  private: boolean;
  share_key: string;
  tags: Array<TTag>;
  links: TLinks;
  user: TUser;
  cover_photo: TPhoto;
  preview_photos: Array<TPhotoMin>;
};

export type TTag = {
  type: string;
  title: string;
  source?: TSource;
};

export type TSource = {
  ancestry: any;
  title: string;
  subtitle: string;
  description: string | null;
  redirect: any;
  meta_title: string;
  meta_description: string;
  cover_photo: TPhoto;
  affiliate_search_query: any;
};

export type TPhotoMin = {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  blur_hash: string;
  asset_type: string;
  urls: TUrls;
};

export type TPhoto = TPhotoMin & {
  alternative_slugs: TLangs;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  description: string | null;
  alt_description: string;
  breadcrumbs: any[];
  links: TLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: any;
  topic_submissions: TTopicSubmissions;
  premium?: boolean;
  plus?: boolean;
  user: TUser;
};

export type TUrls = Partial<{
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
  medium: string;
  large: string;
}>;

export type TLinks = Partial<{
  self: string;
  html: string;
  download: string;
  download_location: string;
  photos: string;
  likes: string;
  portfolio: string | null;
  following: string;
  followers: string;
  related: string;
}>;

export type TUser = {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: any;
  portfolio_url: string | null;
  bio: string | null;
  location: string | null;
  links: TLinks;
  profile_image: TUrls;
  instagram_username: string | null;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: TSocial;
};

export type TSocial = TNulleable<{
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: string;
}>;

export type TTopicSubmissions = {
  [key: string]: {
    status: string;
    approved_on?: string; // date
  };
};

export type TLangs = {
  [key: string]: string;
};
