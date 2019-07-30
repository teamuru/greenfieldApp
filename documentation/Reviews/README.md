# Reviews Components Documentation

> Ensure that the installation directions and correct Node versioning specified in the [Green Field App Documentation](../../README.md)

<p align="center" width="80%" height="80%" >
<img src="overview.png">
</p>

## Table of Contents

1. [Sample API](#Sample-API)
2. [Reviews Component](#Reviews-Component)
   2i. [Overview-Section](#overview-section)
   2ii. [Reviews-List](#reviews-list)
   2iii. [Post-Review](#post-review)

## Sample-API

To create the reviews component, GET requests needed to be made on a 2 routes. One route to get a list of all [reviews](#reviews-list) based on a productId and a second route to grab [meta-data](#meta-data-list) regarding that particular product.

The buisness requirements also specified that users be able to post a new review that can take in the following [request body](#post-new-review).

The API also handles put requests to mark as helpful or report reviews.

### reviews-list

> The reviews object

<p align="center" width="80%" height="80%" >
<img src="reviewslistapi.gif">
</p>

### meta-data

> Product summary data

<p align="center"  width="80%" height="80%">
<img src="metaapi.gif">
</p>

### post-new-review

> Request body

<p align="center"  width="80%" height="80%">
<img src="postapi.gif">
</p>

## Reviews-Component

### overview-section

> The buisness requirements stated that an overview of the product be provided and render:
>
> - The Overall Rating (value and stars handling up to a quarter of a star)
> - % of users that recommended the product
> - A Breakdown of 1 - 5 star ratings
> - An overall average value from the different "characteristics" if they exist.

<p align="center"  width="80%" height="80%">
<img src="meta_gif.gif">
</p>

### reviews-list

> For the list of reviews, the buisness requirements requested the following:
>
> - Total No. of reviews for that product
> - Each Entry required:
>   - A star rating submitted
>   - Username
>   - Date formatted
>   - Summary
>   - Body
>   - If the user recommended the product, a checkmark and statement will render
>   - Any responses to the review
>   - An option for the client to mark a review as helpful
>   - An option to report a review
> - A default of 2 reviews listed on page load
> - Upon clicking "More Reviews", 2 more reviews will load
> - An option to "Add Review"

<p align="center"  width="80%" height="80%">
<img src="reviewslist_gif.gif">
</p>

### post-review

<p align="center"  width="80%" height="80%">
<img src="form.gif">
</p>
