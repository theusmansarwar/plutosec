"use client";

import { useEffect } from "react";
import "./Services.css";
import { FaArrowRightLong } from "react-icons/fa6";
const ReviewsCarousel = () => {
  useEffect(() => {
    const loadWidget = async () => {
      if (typeof window !== "undefined") {
        const script = document.createElement("script");
        script.src =
          "https://widget.reviews.io/carousel-inline-iframeless/dist.js?_t=2025051613";
        script.async = true;
        document.body.appendChild(script);

        const css1 = document.createElement("link");
        css1.rel = "stylesheet";
        css1.href =
          "https://assets.reviews.io/css/widgets/carousel-widget.css?_t=2025051613";
        document.head.appendChild(css1);

        const css2 = document.createElement("link");
        css2.rel = "stylesheet";
        css2.href =
          "https://assets.reviews.io/iconfont/reviewsio-icons/style.css?_t=2025051613";
        document.head.appendChild(css2);

        script.onload = () => {
          new window.carouselInlineWidget("reviewsio-carousel-widget", {
            store: "plutosec.ca-wwy31g5",
            lang: "en",
            carousel_type: "default",
            styles_carousel: "CarouselWidget--sideHeader--withcards",
            options: {
              general: {
                review_type: "company, product",
                min_reviews: "1",
                max_reviews: "20",
                address_format: "CITY, COUNTRY",
                enable_auto_scroll: 10000,
              },
              header: {
                enable_overall_stars: true,
                rating_decimal_places: 2,
              },
              reviews: {
                enable_customer_name: true,
                enable_customer_location: true,
                enable_verified_badge: true,
                enable_subscriber_badge: true,
                enable_recommends_badge: true,
                enable_photos: true,
                enable_videos: true,
                enable_review_date: true,
                disable_same_customer: true,
                min_review_percent: 4,
                third_party_source: true,
                hide_empty_reviews: true,
                enable_product_name: true,
              },
              popups: {
                enable_review_popups: true,
                enable_helpful_buttons: true,
                enable_helpful_count: true,
                enable_share_buttons: true,
              },
            },
            translations: {
              verified_customer: "Verified Customer",
            },
            styles: {
              "--base-font-size": "16px",
              "--base-maxwidth": "100%",
              "--reviewsio-logo-style": "var(--logo-inverted)",

              /* Colors from your root palette */
              "--common-star-color": "var(--headings-color)",
              "--header-bg-start-color": "var(--headings-color)",
              "--header-bg-end-color": "var(--headings-color)",
              "--header-star-color": "black",
              "--header-heading-text-color": "black",
              "--header-subheading-text-color": "black",
              "--header-border-radius": "var(--default-border-radius)",
              "--item-background-start-color": "#e7e7e725",
              "--item-background-end-color": "#000000",
              "--item-border-radius": "var(--default-border-radius)",
              "--item-shadow-color": "var(--headings-color)",
              "--item-shadow-size": "10px",

              "--heading-text-color": "var(--headings-color)",
              "--body-text-color": "var(--text-color)",

              "--scroll-button-icon-color": "var(--headings-color)",
              "--badge-icon-color": "var(--headings-color)",
              "--badge-text-color": "var(--headings-color)",
              "--popup-color": "#212121",

              "--popup-border-radius": "var(--default-border-radius)", // ✅ Rounded corners
              "--popup-box-shadow": "var(--default-box-shadow)",
              "--popup-backdrop-color": "rgba(0,0,0,0.75)",
              "--popup-icon-color": "var(--headings-color)",
              "--tooltip-bg-color": "var(--headings-color)",
              "--tooltip-text-color": "var(--text-color)",
            },
          });
        };
      }
    };

    loadWidget();
  }, []);

  return (
    <>
     <div className="Head-area">
        <div className="headings">
          <h1>What Our Clients Say</h1>
          <img src="/headingimg.svg" />
        </div>
       
      </div>
  <div id="reviewsio-carousel-widget" />
  </>
  )
};

export default ReviewsCarousel;
