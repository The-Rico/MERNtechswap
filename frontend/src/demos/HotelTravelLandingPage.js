import React from 'react';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import Hero from 'components/hero/TwoColumnWithInput.js';
import Features from 'components/features/ThreeColSimple.js';
import SliderCard from 'components/cards/ThreeColSlider.js';
import TrendingCard from 'components/cards/TwoTrendingPreviewCardsWithImage.js';
import Footer from 'components/footers/MiniCenteredFooter.js';

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Features />
    <SliderCard />
    <TrendingCard />
    <Footer />
  </AnimationRevealPage>
);
