import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBlogAndNewsSections extends Struct.ComponentSchema {
  collectionName: 'components_blocks_blog_and_news_sections';
  info: {
    displayName: 'Blog & News Sections';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksContactUsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_us_sections';
  info: {
    displayName: 'Contact Us Section';
  };
  attributes: {
    btnText: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    descriptionMessage: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    input: Schema.Attribute.Component<'shared.input', true>;
    titleMessage: Schema.Attribute.String;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.link', true>;
    text: Schema.Attribute.RichText;
  };
}

export interface BlocksProfileSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_profile_sections';
  info: {
    displayName: 'Profile Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_sections';
  info: {
    displayName: 'Service Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksStatsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stats_sections';
  info: {
    displayName: 'Stats Section';
  };
  attributes: {
    stats: Schema.Attribute.Component<'shared.stats', true>;
  };
}

export interface BlocksWhyChooseSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_choose_sections';
  info: {
    displayName: 'Why Choose Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface FooterBranding extends Struct.ComponentSchema {
  collectionName: 'components_footer_brandings';
  info: {
    displayName: 'Branding';
  };
  attributes: {
    ptName: Schema.Attribute.String;
    tagLine: Schema.Attribute.Text;
  };
}

export interface FooterContact extends Struct.ComponentSchema {
  collectionName: 'components_footer_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    contact: Schema.Attribute.Component<'shared.text', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterService extends Struct.ComponentSchema {
  collectionName: 'components_footer_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    brand: Schema.Attribute.Component<'footer.branding', false>;
    contact: Schema.Attribute.Component<'footer.contact', false>;
    service: Schema.Attribute.Component<'footer.service', false>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.image-link', false>;
    logoText: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImageLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_links';
  info: {
    displayName: 'Image Link';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    url: Schema.Attribute.String;
  };
}

export interface SharedInput extends Struct.ComponentSchema {
  collectionName: 'components_shared_inputs';
  info: {
    displayName: 'input';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.Text;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    isButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedStats extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    description: Schema.Attribute.Text;
    value: Schema.Attribute.String;
  };
}

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.blog-and-news-sections': BlocksBlogAndNewsSections;
      'blocks.contact-us-section': BlocksContactUsSection;
      'blocks.hero': BlocksHero;
      'blocks.profile-section': BlocksProfileSection;
      'blocks.service-section': BlocksServiceSection;
      'blocks.stats-section': BlocksStatsSection;
      'blocks.why-choose-section': BlocksWhyChooseSection;
      'footer.branding': FooterBranding;
      'footer.contact': FooterContact;
      'footer.service': FooterService;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.card': SharedCard;
      'shared.image-link': SharedImageLink;
      'shared.input': SharedInput;
      'shared.link': SharedLink;
      'shared.stats': SharedStats;
      'shared.text': SharedText;
    }
  }
}
