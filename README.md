Install libs: 'npm i'.
Run application: 'npm run dev'. 
Run tests: 'npm run test'.

API There is a mocked API and origin API - check 'fetcher' function and comments
in this file. As the origin API is almost always down we have mimicked versions with
timeouts and fake HTTP fails (fetcher file).

To change timeouts (mocked API) please check the file 'mockResp'. Here you can also
change values.

NOTE - to change a number of elements in cards
  - apply a change in 'config'
  - apply a change in 'mockResp'
  - apply a change in CSS template for card(s)
that's the downside of such approach.

There are no human-readable labels in resp. That is why it was added in the config
file 'config.ts'. To parse labels from 'id' - usually turns into a pain in the neck.

As we have different orders in different responses we solve it using the same 'config.ts' with one source of truth.

Having order and labels in 'config.ts' we can use it to define keys (for React). For now, it is simple numbers. Could be used something else like uuid etc.


Each Card is a generic component and has shared styles and a generic header and grid-table with shared styles and a generic cell. To change header 
you need to change one component - Header.
To change cells styles again can be done in one file - Cell component
Even though there is an option to apply custom styles using className prop for 
these components (like different font colors for columns).

Implemented error handling in case we get HTTP error.
In such case we still show table(s) but with 'error' labels (where values are supposed to be)
Factor Grades has 3 requests. With this approach, having 1 of 3 HTTP fails 
we show a table with all columns. 2 of 3 columns show fetched data, and 1 shows
'error' 

Also for better users exp added a very simple Toast component that shows users
something went wrong


Having several requests with different intervals we still do not rerender the whole card. Only one column will be rerendered.

Test coverage.
Covered component with at least some logic. Dummy components are not covered to avoid ctrl + c, ctrl + v tests


