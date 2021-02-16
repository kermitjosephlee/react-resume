export const paginationCaseStudy = `
### A Story About Pagination

It isn't anything flashy but it was a pagination feature. The standard treatment of pagination is that you have a flat list and use a cursor string to go back to the API to ask for more and give it the cursor so it knows where you are on that list. The API would then send back more.

The issue came when it wasn't a flat list. It was a list of lists. Flipgive is a team fundraising cash-back app. Parents and family-friends shop online and a percentage of the shop comes back and gets attached to a child-player on a team. So on the team fundraising list, you'll see shoppers grouped by the player they are fundraising for.

The initial launch of this feature was to just load in the first 200 fundraisers per player and have the front-end handle how many were shown at a time. Effectively portioning out the fundraisers as the front-end user would need. It helped that the front-end also had to sort the fundraisers by amount raised descending and bubble the current user to the top. This wasn't the ideal solution but it was _a_ solution and we got it out the door.

Months go by without incident until someone from the CS team pings us with an issue a user is experiencing. They are from a team and supporting a player with up to 300+ fundraisers and can't find themselves on the list. _oops_

Now this was a choose-your-own-adventure moment. The cheap and cheerful way out of this issue would be just to crank up the limit to something >300+ and everything would work fine. But then that nagging feeling of knowing there might be another player group that has more than your limit.

The real way out of this situation was to take on the pagination on the list of lists which we took. It meant that the sorting and bubbling had to be done on the back end. It meant that the API needed a new endpoint that would serve up a specific player group of fundraisers. It meant that the API endpoint would need a parameter to know how the return data is handled (do you want deactivated fundraisers in your list? How about invited but not active fundraisers? Did you also want to show those who haven't raised any money?) and it had to be backwards compatible for older versions of the mobile app, so it wouldn't crash those legacy apps.

This also meant that the front-end filtering and conditional rendering needed thorough testing to make sure that dead-end use situations weren't occurring. The whole process to get this working took input from all levels of our product team. Design wanted to know what it would look like, what were the user flow views. Front-end wanted to know how this was going to affect the code and older apps. Back-end wanted to know if I was building the endpoints to avoid n+1's and testing the code properly before pushing for builds. There were conversations about whether to code the filtering and sorting in SQL or in Ruby (we went with SQL).

In the end, showing this at demos it wasn't flashy. Just a link that would have a spinner shown while loading and then the list would be appended. But it is a durable solution allowing for an infinite amount of fundraisers within a player group.`
