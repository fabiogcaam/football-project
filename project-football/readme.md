| HTTP Method | URI Path | Description | JSON |
| --- | --- | --- | --- |
| GET | `/` | Index page | |
| GET | `/leagues` | leagues List | ✅ |
| GET | `/leagues/{id}/details` | league Detail | ✅ |
| GET | `/teams/league/{leagueId}` | Teams list of that league | ✅ |
| GET | `/teams/{id}/details` | Team Detail | ✅ |
| GET | `/players/{teamId}/team` | Players list of that team | ✅ |
| GET | `/players/{id}` | Detail of player | ✅ |
| GET | `/coachs/{teamsId}` | Detail of coach | ✅ |
| GET | `/stadiums/{id}` | Detail of Stadium | ✅ |
| POST | `/players/{playerId}/team`| Create a comment | |
| POST | `/user/{id}/edit` | Edit user (only able for admin) |  |
| POST | `/user/{id}/delete` | Delete user (only able for admin) |  |
| GET | `/user/profile` | User Details (only for current user) |  |
| GET | `/user/list` | List of users (only for admin) |  |
| GET | `/user/{userId}` | Detail of user (only for admin) |  |
| POST | `/auth/login` | Login |  |
| POST | `/auth/signup` | Create user |  |
| POST | `/auth/login` | Logout |  |

