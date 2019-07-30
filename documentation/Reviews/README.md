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

<p align="center"  width="80%" height="80%">
<img src="meta_gif.gif">
</p>

### reviews-list

<p align="center"  width="80%" height="80%">
<img src="reviewslist_gif.gif">
</p>

### post-review

<p align="center"  width="80%" height="80%">
<img src="form.gif">
</p>
