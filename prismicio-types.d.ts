// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * Content field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text about page content
   * - **API ID Path**: about.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField /**
   * Meta Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

/**
 * Content for chapter documents
 */
interface ChapterDocumentData {
  /**
   * Title field in *chapter*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: chapter.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * chapter document from Prismic
 *
 * - **API ID**: `chapter`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ChapterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ChapterDocumentData>,
    "chapter",
    Lang
  >;

/**
 * Content for Comic documents
 */
interface ComicDocumentData {
  /**
   * Title field in *Comic*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Comic Number/Title
   * - **API ID Path**: comic.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Chapter field in *Comic*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: comic.chapter
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  chapter: prismic.ContentRelationshipField<"chapter">;

  /**
   * Publish Date field in *Comic*
   *
   * - **Field Type**: Date
   * - **Placeholder**: Date of Original Release
   * - **API ID Path**: comic.publish_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  publish_date: prismic.DateField;

  /**
   * Comic Image field in *Comic*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: comic.desktop
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  desktop: prismic.ImageField<never>;

  /**
   * Thumbnail field in *Comic*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: comic.thumbnail
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  thumbnail: prismic.ImageField<never>;

  /**
   * Blog Post field in *Comic*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Only enter text in here if you want to post a blog-type post instead of just a comic strip
   * - **API ID Path**: comic.blog_post
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  blog_post: prismic.RichTextField /**
   * Meta Description field in *Comic*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: comic.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Comic*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: comic.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Comic*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: comic.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Comic document from Prismic
 *
 * - **API ID**: `comic`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ComicDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ComicDocumentData>, "comic", Lang>;

/**
 * Item in *Site Details → Social Media*
 */
export interface SiteDetailsDocumentDataSocialMediaItem {
  /**
   * icon field in *Site Details → Social Media*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: site_details.social_media[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * Name field in *Site Details → Social Media*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: site_details.social_media[].name
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  name: prismic.SelectField<
    "Twitter" | "Facebook" | "Patreon" | "Instagram" | "Personal"
  >;

  /**
   * URL field in *Site Details → Social Media*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: site_details.social_media[].url
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkField;
}

/**
 * Content for Site Details documents
 */
interface SiteDetailsDocumentData {
  /**
   * Banner Image field in *Site Details*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: site_details.banner_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner_image: prismic.ImageField<never>;

  /**
   * Banner Image (Mobile) field in *Site Details*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: site_details.banner_mobile
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner_mobile: prismic.ImageField<never>;

  /**
   * Social Media field in *Site Details*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: site_details.social_media[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social_media: prismic.GroupField<
    Simplify<SiteDetailsDocumentDataSocialMediaItem>
  > /**
   * Meta Description field in *Site Details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: site_details.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Site Details*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: site_details.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Site Details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: site_details.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Site Details document from Prismic
 *
 * - **API ID**: `site_details`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SiteDetailsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SiteDetailsDocumentData>,
    "site_details",
    Lang
  >;

export type AllDocumentTypes =
  | AboutDocument
  | ChapterDocument
  | ComicDocument
  | SiteDetailsDocument;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      ChapterDocument,
      ChapterDocumentData,
      ComicDocument,
      ComicDocumentData,
      SiteDetailsDocument,
      SiteDetailsDocumentData,
      SiteDetailsDocumentDataSocialMediaItem,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
    };
  }
}
