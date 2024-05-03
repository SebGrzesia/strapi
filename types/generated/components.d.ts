import type { Schema, Attribute } from '@strapi/strapi';

export interface GamesFeaturedGames extends Schema.Component {
  collectionName: 'components_games_featured_games';
  info: {
    displayName: 'featuredGames';
    icon: 'feather';
  };
  attributes: {
    FeaturedGamesHeading: Attribute.String;
    game: Attribute.Relation<
      'games.featured-games',
      'oneToOne',
      'api::game.game'
    >;
  };
}

export interface GamesGameSelection extends Schema.Component {
  collectionName: 'components_games_game_selections';
  info: {
    displayName: 'GameSelection';
  };
  attributes: {
    types: Attribute.Relation<
      'games.game-selection',
      'oneToMany',
      'api::type.type'
    >;
    SelectionHead: Attribute.String;
  };
}

export interface LayoutButton extends Schema.Component {
  collectionName: 'components_layout_buttons';
  info: {
    displayName: 'Button';
    icon: 'bold';
  };
  attributes: {
    Label: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'brush';
    description: '';
  };
  attributes: {
    Image: Attribute.Media & Attribute.Required;
    Buttons: Attribute.Component<'layout.button', true>;
    QACarusell: Attribute.Component<'qa.info-selection'>;
    Games: Attribute.Component<'games.game-selection'>;
  };
}

export interface QaInfoSelection extends Schema.Component {
  collectionName: 'components_qa_info_selections';
  info: {
    displayName: 'InfoSelection';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    company_info: Attribute.Relation<
      'qa.info-selection',
      'oneToOne',
      'api::company-info.company-info'
    >;
  };
}

export interface SeoSeoInformation extends Schema.Component {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'SeoInformation';
    icon: 'emotionHappy';
  };
  attributes: {
    SeoTitle: Attribute.String;
    SeoDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'games.featured-games': GamesFeaturedGames;
      'games.game-selection': GamesGameSelection;
      'layout.button': LayoutButton;
      'layout.hero-section': LayoutHeroSection;
      'qa.info-selection': QaInfoSelection;
      'seo.seo-information': SeoSeoInformation;
    }
  }
}
