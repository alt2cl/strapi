import type { Schema, Attribute } from '@strapi/strapi';

export interface AtributeAtribute extends Schema.Component {
  collectionName: 'components_atribute_atributes';
  info: {
    displayName: 'atribute';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.String;
    titlebutton: Attribute.String;
    url: Attribute.String;
    cover: Attribute.Media;
  };
}

export interface ContentblockContentBlock extends Schema.Component {
  collectionName: 'components_contentblock_content_blocks';
  info: {
    displayName: 'content block';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    content: Attribute.RichText;
    cover: Attribute.Media;
    titlebutton: Attribute.String;
    url: Attribute.String;
    layout: Attribute.Enumeration<['leftimage', 'rightimage', 'hideimage']>;
  };
}

export interface NavNavigation extends Schema.Component {
  collectionName: 'components_nav_navigations';
  info: {
    displayName: 'navigation';
  };
  attributes: {
    title: Attribute.String;
    target: Attribute.Enumeration<['_blank', '_self']>;
    url: Attribute.String;
  };
}

export interface NavSociallinks extends Schema.Component {
  collectionName: 'components_nav_sociallinks';
  info: {
    displayName: 'sociallinks';
  };
  attributes: {
    title: Attribute.String;
    red: Attribute.Enumeration<
      ['instagram', 'facebook', 'twitter', 'linkedin']
    >;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'atribute.atribute': AtributeAtribute;
      'contentblock.content-block': ContentblockContentBlock;
      'nav.navigation': NavNavigation;
      'nav.sociallinks': NavSociallinks;
    }
  }
}
