 $.ajax({
               url: "/_api/SP.UserProfiles.PeopleManager/GetMyProperties",
          method: "GET",
          headers: { "Accept": "application/json; odata=verbose" },
          success: function (data) {
        },
        error: function (data) {
          alert("Error: " + data);
        }
      });