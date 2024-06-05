// API used is from https://namey.muffinlabs.com/
// Copied as directed by creator from https://namey.muffinlabs.com/api.js and simplified to just the basics needed for this application.

  /*
   * List of parameters (just the ones used in this application though): 
   * type -- what sort of name you want 'female', 'male', 'surname', or leave blank if you want both genders
   *
   * with_surname -- true/false, if you want surnames with the first
   * name. If false, you'll just get first names.  Default is true.
   *
   * frequency -- 'common', 'rare', 'all' -- default is 'common'. This
   * picks a subset of names from the database -- common names are
   * names that occur frequently, rare is names that occur rarely.
   */

function getNameyName(options) {
  var tmp_params = {};
  var query;
  if ( typeof(options) == "object" ) {
    if ( typeof(options.type) != "undefined" && options.type != "both" ) {
      tmp_params.type = options.type;
    };

    if ( options.type != "surname" && typeof(options.with_surname) != "undefined" ) {
      tmp_params.with_surname = options.with_surname;
    } else if ( typeof(options.frequency) != "undefined" ) {
      tmp_params.frequency = options.frequency;
    }
  }

  query = Object.keys(tmp_params)
                .map(function(k) {
                  return encodeURIComponent(k) + '=' + encodeURIComponent(tmp_params[k]);
                })
                .join('&');
  return window.fetch('https://namey.muffinlabs.com/name.json?' + query, { mode: 'cors' })
        .then(function(d) { return d.json(); })
        .then(function(d) {
            return d;
        });
}

export async function getName(nameType, commonality = "all") {
  return await getNameyName({ type: nameType, with_surname: true, frequency: commonality});
}