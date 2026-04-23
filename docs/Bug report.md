# Bug Report

---

## BUG-001: Genre Multi-Select Uses AND Logic Instead of OR Logic

**Severity:** Major
**Status:** Open
**Found in:** Genre Filter (TC-GNR-07)
**Date:** 2026-04-22

### Summary
When selecting multiple genres, the system filters movies using AND logic (movie must belong to ALL selected genres) instead of OR logic (movie belongs to ANY selected genre). Results decrease as more genres are selected, eventually returning 0 results.

### Steps to Reproduce
1. Open https://tmdb-discover.surge.sh/
2. Open the Genre multi-select dropdown
3. Select 3 genres → records display normally
4. Select 4 genres → records reduce to ~20
5. Select 5 genres → records reduce to ~7
6. Select 6+ genres → no records displayed

### Actual Result
- Results decrease significantly as more genres are selected
- Selecting 6+ genres returns an empty page with no results or error message

### Expected Result
- Results should remain relevant when multiple genres are selected
- Items matching any of the selected genres should be displayed (OR logic)

### Root Cause Analysis
TMDB API supports two modes for `with_genres` parameter:
- `with_genres=28,12` → comma separator = AND logic ← currently used
- `with_genres=28|12` → pipe separator = OR logic ← expected behavior

### Impact
- Limits content discovery when multiple genres are selected
- Creates a confusing user experience due to unexpected filtering behavior
- Results in an empty state without any error message or guidance

---

## BUG-002: Direct URL Slug Access Returns "Page Not Found"

**Severity:** Minor
**Status:** Open
**Found in:** Navigation (TC-CAT-07, TC-PAG-11)
**Date:** 2026-04-22

### Summary
Accessing a category directly via URL slug (e.g. `https://tmdb-discover.surge.sh/popular`) returns a blank page with "page not found" text instead of rendering the expected content.

### Steps to Reproduce
1. Open a new browser tab
2. Type directly: `https://tmdb-discover.surge.sh/popular`
3. Press Enter and observe the result

### Actual Result
- Page displays "page not found"
- No movie cards are rendered
- Navigation bar is not visible

### Expected Result
- Page loads normally and displays the Popular category content

### Impact
- Users cannot bookmark or share direct links to a specific category
- Refreshing the page on any category will lose the current content
- Deep linking is not supported

### Workaround
Navigate from the root URL `https://tmdb-discover.surge.sh/` and click the desired category tab.

---

## BUG-003: Search Returns Results Based on Word Matching Instead of Exact Phrase

**Severity:** Major
**Status:** Open
**Found in:** Search Filter (TC-SRC-02)
**Date:** 2026-04-22

### Summary
When searching for a multi-word phrase, the search returns results matching individual words rather than the exact phrase. For example, searching "The Sniper" returns "Sniper: The Last Stand" because both "The" and "Sniper" appear in the title separately.

### Steps to Reproduce
1. Open https://tmdb-discover.surge.sh/
2. Type "The Sniper" in the search box
3. Observe the results
4. Check if all returned titles contain the exact phrase "The Sniper"

### Actual Result
- Search splits the input into individual words and matches any of them
- "Sniper: The Last Stand" appears in results despite not containing "The Sniper" as a phrase

### Expected Result
- Search should match the full phrase as entered by the user
- Only titles containing the exact phrase "The Sniper" should appear

### Impact
- Users cannot search for movies by exact multi-word title
- Search results are noisy and contain irrelevant content
- Reduces trust in the search feature accuracy

---

## BUG-004: Search Returns Results That Do Not Contain the Keyword in the Title

**Severity:** Minor
**Status:** Open
**Found in:** Search Filter (TC-SRC-04)
**Date:** 2026-04-22

### Summary
Searching for a single keyword returns some results whose titles do not contain the keyword at all. For example, searching "Ava" returns "Infrared Dreams" despite the title not containing "Ava".

### Steps to Reproduce
1. Open https://tmdb-discover.surge.sh/
2. Type "Ava" in the search box
3. Observe the results
4. Check if all returned titles contain "Ava"

### Actual Result
- "Infrared Dreams" appears in results despite the title not containing "Ava"
- Some results are unrelated to the search keyword

### Expected Result
- All returned results should have titles containing the search keyword

### Impact
- Search results contain unexpected and irrelevant titles
- Users cannot rely on search to find movies by title accurately

### Note
Root cause is unclear — further investigation is needed to determine which field(s) the search is matching against (possibly overview, tagline, or original title).

---

## BUG-005: Year From Filter Returns Movies Outside the Selected Year Range

**Severity:** Major
**Status:** Open
**Found in:** Year Filter (TC-YR-03)
**Date:** 2026-04-22

### Summary
After setting the Year From filter to 2020, some movie cards with release years earlier than 2020 still appear in the results. A movie from 1979 was observed in the results despite the From year being set to 2020.

### Steps to Reproduce
1. Open https://tmdb-discover.surge.sh/
2. Set Year From to 2020
3. Observe the movie cards displayed
4. Check the release year of each card

### Actual Result
- Movie cards with release years earlier than 2020 appear in the results
- e.g. A movie from 1979 appears despite Year From = 2020

### Expected Result
- All displayed movies should have release years >= the selected From Year (2020)
- Movies released before 2020 should not appear

### Impact
- Year filter is unreliable and cannot be trusted
- Users may see outdated or irrelevant content despite applying year filters

### Note
Root cause is unclear — may be a data integrity issue in TMDB or a filtering logic issue in the API call. Further investigation needed.

---

## BUG-006: Clicking Pagination Break (...) Navigates to a Page Instead of Showing Input Field

**Severity:** Minor
**Status:** Open
**Found in:** Pagination (TC-PAG-08)
**Date:** 2026-04-23

### Summary
When clicking the pagination break button (...), the page navigates directly to another page instead of showing a text input field that allows the user to type a specific page number to jump to.

### Steps to Reproduce
1. Open https://tmdb-discover.surge.sh/
2. Scroll down to the pagination bar
3. Note the current page number
4. Click the "..." (break) button in the pagination
5. Observe the behavior

### Actual Result
- Clicking "..." navigates directly to another page (jumps ahead)
- No input field appears for the user to type a specific page number

### Expected Result
- Clicking "..." should display a text input field
- User can type a specific page number in the input field and navigate directly to that page
- This is the standard behavior for pagination break buttons in most applications

### Impact
- Users cannot jump directly to a specific page number
- Navigation between distant pages requires multiple clicks
- Pagination UX is inconsistent with standard behavior

### Note
Root cause may be an incorrect configuration of the `react-paginate` component — the `breakLabel` prop may need to render an input element instead of static text.