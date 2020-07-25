import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeOneComponent } from './components/welcome/welcome-one/welcome-one.component';
import { WelcomeTwoComponent } from './components/welcome/welcome-two/welcome-two.component';
import { WelcomeThreeComponent } from './components/welcome/welcome-three/welcome-three.component';
import { WelcomeFourComponent } from './components/welcome/welcome-four/welcome-four.component';
import { WelcomeFiveComponent } from './components/welcome/welcome-five/welcome-five.component';
import { WelcomeSixComponent } from './components/welcome/welcome-six/welcome-six.component';
import { ThemeOneComponent } from './themes/theme-one/theme-one.component';
import { HeaderOneComponent } from './components/header/header-one/header-one.component';
import { HeaderTwoComponent } from './components/header/header-two/header-two.component';
import { ServiceOneComponent } from './components/service/service-one/service-one.component';
import { ServiceTwoComponent } from './components/service/service-two/service-two.component';
import { ServiceThreeComponent } from './components/service/service-three/service-three.component';
import { ServiceFourComponent } from './components/service/service-four/service-four.component';
import { ServiceFiveComponent } from './components/service/service-five/service-five.component';
import { DiscoverOneComponent } from './components/discover/discover-one/discover-one.component';
import { DiscoverTwoComponent } from './components/discover/discover-two/discover-two.component';
import { DiscoverThreeComponent } from './components/discover/discover-three/discover-three.component';
import { DiscoverFourComponent } from './components/discover/discover-four/discover-four.component';
import { CtaOneComponent } from './components/cta/cta-one/cta-one.component';
import { CtaTwoComponent } from './components/cta/cta-two/cta-two.component';
import { FeaturesOneComponent } from './components/features/features-one/features-one.component';
import { FeaturesTwoComponent } from './components/features/features-two/features-two.component';
import { FeaturesThreeComponent } from './components/features/features-three/features-three.component';
import { ProductsOneComponent } from './components/products/products-one/products-one.component';
import { ProductsTwoComponent } from './components/products/products-two/products-two.component';
import { ComparisonOneComponent } from './components/comparison/comparison-one/comparison-one.component';
import { ComparisonTwoComponent } from './components/comparison/comparison-two/comparison-two.component';
import { DownloadComponent } from './components/download/download.component';
import { ReviewsOneComponent } from './components/reviews/reviews-one/reviews-one.component';
import { ReviewsTwoComponent } from './components/reviews/reviews-two/reviews-two.component';
import { FaqOneComponent } from './components/faq/faq-one/faq-one.component';
import { FaqTwoComponent } from './components/faq/faq-two/faq-two.component';
import { ContactOneComponent } from './components/contact/contact-one/contact-one.component';
import { ContactTwoComponent } from './components/contact/contact-two/contact-two.component';
import { FooterOneComponent } from './components/footer/footer-one/footer-one.component';
import { FooterTwoComponent } from './components/footer/footer-two/footer-two.component';
import { ScrollupComponent } from './components/scrollup/scrollup.component';
import { ThemeTwoComponent } from './themes/theme-two/theme-two.component';
import { ThemeThreeComponent } from './themes/theme-three/theme-three.component';
import { ThemeFourComponent } from './themes/theme-four/theme-four.component';
import { ThemeFiveComponent } from './themes/theme-five/theme-five.component';
import { ThemeSixComponent } from './themes/theme-six/theme-six.component';
import { HeaderThreeComponent } from './components/header/header-three/header-three.component';
import { PromoOneComponent } from './components/promo/promo-one/promo-one.component';
import { PromoTwoComponent } from './components/promo/promo-two/promo-two.component';
import { PromoVideoComponent } from './components/promo-video/promo-video.component';
import { BreadcrumbBlogTwoColumnComponent } from './components/breadcrumb/breadcrumb-blog-two-column/breadcrumb-blog-two-column.component';
import { BreadcrumbBlogThreeColumnComponent } from './components/breadcrumb/breadcrumb-blog-three-column/breadcrumb-blog-three-column.component';
import { BreadcrumbBlogLeftSidebarComponent } from './components/breadcrumb/breadcrumb-blog-left-sidebar/breadcrumb-blog-left-sidebar.component';
import { BreadcrumbBlogRightSidebarComponent } from './components/breadcrumb/breadcrumb-blog-right-sidebar/breadcrumb-blog-right-sidebar.component';
import { BreadcrumbBlogDetailsLeftSidebarComponent } from './components/breadcrumb/breadcrumb-blog-details-left-sidebar/breadcrumb-blog-details-left-sidebar.component';
import { BreadcrumbBlogDetailsRightSidebarComponent } from './components/breadcrumb/breadcrumb-blog-details-right-sidebar/breadcrumb-blog-details-right-sidebar.component';
import { BreadcrumbReviewsComponent } from './components/breadcrumb/breadcrumb-reviews/breadcrumb-reviews.component';
import { BreadcrumbFaqComponent } from './components/breadcrumb/breadcrumb-faq/breadcrumb-faq.component';
import { BreadcrumbContactComponent } from './components/breadcrumb/breadcrumb-contact/breadcrumb-contact.component';
import { BlogTwoColumnComponent } from './components/blogs/blog-two-column/blog-two-column.component';
import { BlogThreeColumnComponent } from './components/blogs/blog-three-column/blog-three-column.component';
import { BlogLeftSidebarComponent } from './components/blogs/blog-left-sidebar/blog-left-sidebar.component';
import { BlogRightSidebarComponent } from './components/blogs/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsLeftSidebarComponent } from './components/blogs/blog-details-left-sidebar/blog-details-left-sidebar.component';
import { BlogDetailsRightSidebarComponent } from './components/blogs/blog-details-right-sidebar/blog-details-right-sidebar.component';
import { ReviewsPageComponent } from './components/inner-pages/reviews-page/reviews-page.component';
import { FaqPageComponent } from './components/inner-pages/faq-page/faq-page.component';
import { ContactPageComponent } from './components/inner-pages/contact-page/contact-page.component';
import { ErrorPageComponent } from './components/inner-pages/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeOneComponent,
    WelcomeTwoComponent,
    WelcomeThreeComponent,
    WelcomeFourComponent,
    WelcomeFiveComponent,
    WelcomeSixComponent,
    ThemeOneComponent,
    HeaderOneComponent,
    HeaderTwoComponent,
    ServiceOneComponent,
    ServiceTwoComponent,
    ServiceThreeComponent,
    ServiceFourComponent,
    ServiceFiveComponent,
    DiscoverOneComponent,
    DiscoverTwoComponent,
    DiscoverThreeComponent,
    DiscoverFourComponent,
    CtaOneComponent,
    CtaTwoComponent,
    FeaturesOneComponent,
    FeaturesTwoComponent,
    FeaturesThreeComponent,
    ProductsOneComponent,
    ProductsTwoComponent,
    ComparisonOneComponent,
    ComparisonTwoComponent,
    DownloadComponent,
    ReviewsOneComponent,
    ReviewsTwoComponent,
    FaqOneComponent,
    FaqTwoComponent,
    ContactOneComponent,
    ContactTwoComponent,
    FooterOneComponent,
    FooterTwoComponent,
    ScrollupComponent,
    ThemeTwoComponent,
    ThemeThreeComponent,
    ThemeFourComponent,
    ThemeFiveComponent,
    ThemeSixComponent,
    HeaderThreeComponent,
    PromoOneComponent,
    PromoTwoComponent,
    PromoVideoComponent,
    BreadcrumbBlogTwoColumnComponent,
    BreadcrumbBlogThreeColumnComponent,
    BreadcrumbBlogLeftSidebarComponent,
    BreadcrumbBlogRightSidebarComponent,
    BreadcrumbBlogDetailsLeftSidebarComponent,
    BreadcrumbBlogDetailsRightSidebarComponent,
    BreadcrumbReviewsComponent,
    BreadcrumbFaqComponent,
    BreadcrumbContactComponent,
    BlogTwoColumnComponent,
    BlogThreeColumnComponent,
    BlogLeftSidebarComponent,
    BlogRightSidebarComponent,
    BlogDetailsLeftSidebarComponent,
    BlogDetailsRightSidebarComponent,
    ReviewsPageComponent,
    FaqPageComponent,
    ContactPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
