# Reviews Components

<p align="center" width="80%" height="80%" >
<img src="overview.png">
</p>

## Table of Contents

1. [Sample API](#Sample-API)
2. [Overview-Section](#Overview-Section)
3. [Reviews-List](#Reviews-List)
4. [Post-Review](#Post-Review)

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

## Overview-Section

<p align="center"  width="80%" height="80%">
<img src="meta_gif.gif">
</p>

## Reviews-List

<p align="center"  width="80%" height="80%">
<img src="reviewslist_gif.gif">
</p>

## Post-Review

<p align="center"  width="80%" height="80%">
<img src="form.gif">
</p>
