var com = com || {};
com.oracle = com.oracle || {};
com.oracle.bluekai = {
	/**
	 * 
	 * @param siteId :
	 *            The Site ID to invoke while fetching and sending data from/to
	 *            bluekai
	 * @param limit :
	 *            Pixel limit per pageview
	 */
	Client : function(siteId, limit) {

		var userCampaigns = {};
		var siteId = siteId;
		var limit = limit;

		/**
		 * Initialize bluekai APIs i.e. Use js API to fetch current campaigns
		 * for the user Load the bk-coretag.js to post user data later on.
		 * Execute callback function with fetched user campaigns.
		 * 
		 * @param onLoad :
		 *            A callback function to execute after fetching user
		 *            campaigns. The function will receive a map object
		 *            containing campaigns and relative categories.
		 */
		this.init = function(onLoad) {
			createScript('http://tags.bluekai.com/site/' + siteId + '?ret=js',
					function() {
						populateUserCampaigns();
						onLoad(userCampaigns);
					});

			createScript('http://tags.bkrtx.com/js/bk-coretag.js', null);
		}

		var createScript = function(src, onLoad) {
			var s = document.createElement('script');
			s.type = 'text/javascript';
			$('head').append(s);
			if (onLoad) {
				s.onload = onLoad;
			}
			s.src = src;
		}

		/**
		 * Funtion to send user data to bluekai
		 * 
		 * @param data :
		 *            A map of values to be sent to bluekai as phints.
		 * 
		 */
		this.postUserData = function(data) {
			// Adding bluekai container frame if it does not exist already.
			if ($('[name="__bkframe"]').length < 1) {
				$('body')
						.append(
								'<iframe name="__bkframe" height="0" width="0" frameborder="0" style="display:none;position:absolute;clip:rect(0px 0px 0px 0px)" src="about:blank"></iframe>');
			}

			// Adding phints to request
			if (data) {
				for (i in data) {
					bk_addPageCtx(i, data[i]);
				}

			}

			// sending data to bluekai
			bk_doJSTag(siteId, limit);
		}

		var populateUserCampaigns = function() {
			if (bk_results) {

				var campaigns = bk_results.campaigns;
				var campaign;
				var categories = [];
				for (i in campaigns) {
					campaign = campaigns[i];
					for (t in campaign.categories) {
						categories[t] = campaign.categories[t].categoryID;
					}
					userCampaigns[campaign.campaign] = categories;
				}

			}
		}

	}
};