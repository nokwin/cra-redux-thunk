export const mockedRedditData = [
  {
    kind: "t3",
    data: {
      approved_at_utc: null,
      subreddit: "react",
      selftext: "",
      author_fullname: "t2_70isnt71",
      saved: false,
      mod_reason_title: null,
      gilded: 0,
      clicked: false,
      title: "Strong Typed Redux",
      link_flair_richtext: [],
      subreddit_name_prefixed: "r/react",
      hidden: false,
      pwls: null,
      link_flair_css_class: null,
      downs: 0,
      top_awarded_type: null,
      hide_score: false,
      name: "t3_hfgzdc",
      quarantine: false,
      link_flair_text_color: "dark",
      upvote_ratio: 1,
      author_flair_background_color: null,
      subreddit_type: "public",
      ups: 5,
      total_awards_received: 0,
      media_embed: {},
      author_flair_template_id: null,
      is_original_content: false,
      user_reports: [],
      secure_media: null,
      is_reddit_media_domain: false,
      is_meta: false,
      category: null,
      secure_media_embed: {},
      link_flair_text: null,
      can_mod_post: false,
      score: 5,
      approved_by: null,
      author_premium: false,
      thumbnail: "",
      edited: false,
      author_flair_css_class: null,
      author_flair_richtext: [],
      gildings: {},
      content_categories: null,
      is_self: false,
      mod_note: null,
      created: 1593094610,
      link_flair_type: "text",
      wls: null,
      removed_by_category: null,
      banned_by: null,
      author_flair_type: "text",
      domain: "nicusor.dev",
      allow_live_comments: false,
      selftext_html: null,
      likes: null,
      suggested_sort: null,
      banned_at_utc: null,
      url_overridden_by_dest: "https://nicusor.dev/strong-redux/",
      view_count: null,
      archived: false,
      no_follow: false,
      is_crosspostable: false,
      pinned: false,
      over_18: false,
      all_awardings: [],
      awarders: [],
      media_only: false,
      can_gild: false,
      spoiler: false,
      locked: false,
      author_flair_text: null,
      treatment_tags: [],
      visited: false,
      removed_by: null,
      num_reports: null,
      distinguished: null,
      subreddit_id: "t5_2su6s",
      mod_reason_by: null,
      removal_reason: null,
      link_flair_background_color: "",
      id: "hfgzdc",
      is_robot_indexable: true,
      report_reasons: null,
      author: "nicusorch",
      discussion_type: null,
      num_comments: 0,
      send_replies: true,
      whitelist_status: null,
      contest_mode: false,
      mod_reports: [],
      author_patreon_flair: false,
      author_flair_text_color: null,
      permalink: "/r/react/comments/hfgzdc/strong_typed_redux/",
      parent_whitelist_status: null,
      stickied: false,
      url: "https://nicusor.dev/strong-redux/",
      subreddit_subscribers: 1214,
      created_utc: 1593065810,
      num_crossposts: 0,
      media: null,
      is_video: false,
    },
  },
  {
    kind: "t3",
    data: {
      approved_at_utc: null,
      subreddit: "react",
      selftext:
        "I'm new to React and am trying to build an app which shuffles football players into two teams and am having difficulty with passing data from one component to another.\n\nIn my reducer.js, I take a list of players and shuffle them, adding the shuffled list to state:\n\nconst shufflePlayers = (state) =&gt; {\n  return {\n    ...state,\n    shuffledList: [\n      ...state.playersList.sort(() =&gt; Math.random() - 0.5)\n    ]\n  }\n}\n\nThen in 'src/components/DisplayTeams.index.js', I map the 'shuffledList' array to props:\n\nimport { connect } from \"react-redux\";\nimport DisplayTeams from \"./DisplayTeams\";\n\nconst mapStateToProps = (state) =&gt; {\n  return {\n    shuffledList: state.shuffledList,\n  };\n};\nexport default connect(mapStateToProps)(DisplayTeams);\n\nand finally, in 'src/components/DisplayTeams.js', I attempt to render the 'shuffledList' array in a list:\n\nimport React from 'react';\nimport '../../App.css';\n\nconst DisplayTeams = ({ shuffledList }) =&gt; (\n\n  &lt;div&gt;\n    &lt;ul&gt;\n      {shuffledList.map((player, index) =&gt; (\n        &lt;li key={index}&gt;{player.name}&lt;/li&gt;\n      ))}\n    &lt;/ul&gt;\n  &lt;/div&gt;\n\n);\n\nexport default DisplayTeams;\n\nbut am getting TypeError: Cannot read property 'map' of undefined, indicating that the 'shuffledList' array is empty or not set at all. \n\nAny help will be much appreciated!!",
      author_fullname: "t2_cw1kq",
      saved: false,
      mod_reason_title: null,
      gilded: 0,
      clicked: false,
      title: "Help needed with passing data between components",
      link_flair_richtext: [],
      subreddit_name_prefixed: "r/react",
      hidden: false,
      pwls: null,
      link_flair_css_class: null,
      downs: 0,
      top_awarded_type: null,
      hide_score: false,
      name: "t3_hfimsb",
      quarantine: false,
      link_flair_text_color: "dark",
      upvote_ratio: 1,
      author_flair_background_color: null,
      subreddit_type: "public",
      ups: 1,
      total_awards_received: 0,
      media_embed: {},
      author_flair_template_id: null,
      is_original_content: false,
      user_reports: [],
      secure_media: null,
      is_reddit_media_domain: false,
      is_meta: false,
      category: null,
      secure_media_embed: {},
      link_flair_text: null,
      can_mod_post: false,
      score: 1,
      approved_by: null,
      author_premium: false,
      thumbnail: "",
      edited: false,
      author_flair_css_class: null,
      author_flair_richtext: [],
      gildings: {},
      content_categories: null,
      is_self: true,
      mod_note: null,
      created: 1593103169,
      link_flair_type: "text",
      wls: null,
      removed_by_category: null,
      banned_by: null,
      author_flair_type: "text",
      domain: "self.react",
      allow_live_comments: false,
      selftext_html:
        '&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;I&amp;#39;m new to React and am trying to build an app which shuffles football players into two teams and am having difficulty with passing data from one component to another.&lt;/p&gt;\n\n&lt;p&gt;In my reducer.js, I take a list of players and shuffle them, adding the shuffled list to state:&lt;/p&gt;\n\n&lt;p&gt;const shufflePlayers = (state) =&amp;gt; {\n  return {\n    ...state,\n    shuffledList: [\n      ...state.playersList.sort(() =&amp;gt; Math.random() - 0.5)\n    ]\n  }\n}&lt;/p&gt;\n\n&lt;p&gt;Then in &amp;#39;src/components/DisplayTeams.index.js&amp;#39;, I map the &amp;#39;shuffledList&amp;#39; array to props:&lt;/p&gt;\n\n&lt;p&gt;import { connect } from &amp;quot;react-redux&amp;quot;;\nimport DisplayTeams from &amp;quot;./DisplayTeams&amp;quot;;&lt;/p&gt;\n\n&lt;p&gt;const mapStateToProps = (state) =&amp;gt; {\n  return {\n    shuffledList: state.shuffledList,\n  };\n};\nexport default connect(mapStateToProps)(DisplayTeams);&lt;/p&gt;\n\n&lt;p&gt;and finally, in &amp;#39;src/components/DisplayTeams.js&amp;#39;, I attempt to render the &amp;#39;shuffledList&amp;#39; array in a list:&lt;/p&gt;\n\n&lt;p&gt;import React from &amp;#39;react&amp;#39;;\nimport &amp;#39;../../App.css&amp;#39;;&lt;/p&gt;\n\n&lt;p&gt;const DisplayTeams = ({ shuffledList }) =&amp;gt; (&lt;/p&gt;\n\n&lt;p&gt;&amp;lt;div&amp;gt;\n    &amp;lt;ul&amp;gt;\n      {shuffledList.map((player, index) =&amp;gt; (\n        &amp;lt;li key={index}&amp;gt;{player.name}&amp;lt;/li&amp;gt;\n      ))}\n    &amp;lt;/ul&amp;gt;\n  &amp;lt;/div&amp;gt;&lt;/p&gt;\n\n&lt;p&gt;);&lt;/p&gt;\n\n&lt;p&gt;export default DisplayTeams;&lt;/p&gt;\n\n&lt;p&gt;but am getting TypeError: Cannot read property &amp;#39;map&amp;#39; of undefined, indicating that the &amp;#39;shuffledList&amp;#39; array is empty or not set at all. &lt;/p&gt;\n\n&lt;p&gt;Any help will be much appreciated!!&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;',
      likes: null,
      suggested_sort: null,
      banned_at_utc: null,
      view_count: null,
      archived: false,
      no_follow: true,
      is_crosspostable: false,
      pinned: false,
      over_18: false,
      all_awardings: [],
      awarders: [],
      media_only: false,
      can_gild: false,
      spoiler: false,
      locked: false,
      author_flair_text: null,
      treatment_tags: [],
      visited: false,
      removed_by: null,
      num_reports: null,
      distinguished: null,
      subreddit_id: "t5_2su6s",
      mod_reason_by: null,
      removal_reason: null,
      link_flair_background_color: "",
      id: "hfimsb",
      is_robot_indexable: true,
      report_reasons: null,
      author: "webinaction",
      discussion_type: null,
      num_comments: 1,
      send_replies: true,
      whitelist_status: null,
      contest_mode: false,
      mod_reports: [],
      author_patreon_flair: false,
      author_flair_text_color: null,
      permalink:
        "/r/react/comments/hfimsb/help_needed_with_passing_data_between_components/",
      parent_whitelist_status: null,
      stickied: false,
      url:
        "https://www.reddit.com/r/react/comments/hfimsb/help_needed_with_passing_data_between_components/",
      subreddit_subscribers: 1214,
      created_utc: 1593074369,
      num_crossposts: 0,
      media: null,
      is_video: false,
    },
  },
  {
    kind: "t3",
    data: {
      approved_at_utc: null,
      subreddit: "react",
      selftext: "",
      author_fullname: "t2_4uhzdnux",
      saved: false,
      mod_reason_title: null,
      gilded: 0,
      clicked: false,
      title: "4 steps to add a serverless back-end to React",
      link_flair_richtext: [],
      subreddit_name_prefixed: "r/react",
      hidden: false,
      pwls: null,
      link_flair_css_class: null,
      downs: 0,
      top_awarded_type: null,
      hide_score: false,
      name: "t3_hf2aa6",
      quarantine: false,
      link_flair_text_color: "dark",
      upvote_ratio: 1,
      author_flair_background_color: null,
      subreddit_type: "public",
      ups: 7,
      total_awards_received: 0,
      media_embed: {},
      author_flair_template_id: null,
      is_original_content: false,
      user_reports: [],
      secure_media: null,
      is_reddit_media_domain: false,
      is_meta: false,
      category: null,
      secure_media_embed: {},
      link_flair_text: null,
      can_mod_post: false,
      score: 7,
      approved_by: null,
      author_premium: false,
      thumbnail: "",
      edited: false,
      author_flair_css_class: null,
      author_flair_richtext: [],
      gildings: {},
      content_categories: null,
      is_self: false,
      mod_note: null,
      created: 1593038811,
      link_flair_type: "text",
      wls: null,
      removed_by_category: null,
      banned_by: null,
      author_flair_type: "text",
      domain: "medium.com",
      allow_live_comments: false,
      selftext_html: null,
      likes: null,
      suggested_sort: null,
      banned_at_utc: null,
      url_overridden_by_dest:
        "https://medium.com/warpjs/4-steps-to-add-a-serverless-back-end-to-react-ff2a6303727b?sk=25d2cca954cfb5b98e8bb3665db20010",
      view_count: null,
      archived: false,
      no_follow: false,
      is_crosspostable: false,
      pinned: false,
      over_18: false,
      all_awardings: [],
      awarders: [],
      media_only: false,
      can_gild: false,
      spoiler: false,
      locked: false,
      author_flair_text: null,
      treatment_tags: [],
      visited: false,
      removed_by: null,
      num_reports: null,
      distinguished: null,
      subreddit_id: "t5_2su6s",
      mod_reason_by: null,
      removal_reason: null,
      link_flair_background_color: "",
      id: "hf2aa6",
      is_robot_indexable: true,
      report_reasons: null,
      author: "ndkl15",
      discussion_type: null,
      num_comments: 1,
      send_replies: true,
      whitelist_status: null,
      contest_mode: false,
      mod_reports: [],
      author_patreon_flair: false,
      author_flair_text_color: null,
      permalink:
        "/r/react/comments/hf2aa6/4_steps_to_add_a_serverless_backend_to_react/",
      parent_whitelist_status: null,
      stickied: false,
      url:
        "https://medium.com/warpjs/4-steps-to-add-a-serverless-back-end-to-react-ff2a6303727b?sk=25d2cca954cfb5b98e8bb3665db20010",
      subreddit_subscribers: 1214,
      created_utc: 1593010011,
      num_crossposts: 0,
      media: null,
      is_video: false,
    },
  },
  {
    kind: "t3",
    data: {
      approved_at_utc: null,
      subreddit: "react",
      selftext:
        "In terms of time, and complexity, how different is developing in React vs React Native? I understand that this is a broad question but some idea to give context would be appreciated.",
      author_fullname: "t2_aajdih",
      saved: false,
      mod_reason_title: null,
      gilded: 0,
      clicked: false,
      title: "How different is React dev vs React Native dev?",
      link_flair_richtext: [],
      subreddit_name_prefixed: "r/react",
      hidden: false,
      pwls: null,
      link_flair_css_class: null,
      downs: 0,
      top_awarded_type: null,
      hide_score: false,
      name: "t3_hfaymg",
      quarantine: false,
      link_flair_text_color: "dark",
      upvote_ratio: 1,
      author_flair_background_color: null,
      subreddit_type: "public",
      ups: 1,
      total_awards_received: 0,
      media_embed: {},
      author_flair_template_id: null,
      is_original_content: false,
      user_reports: [],
      secure_media: null,
      is_reddit_media_domain: false,
      is_meta: false,
      category: null,
      secure_media_embed: {},
      link_flair_text: null,
      can_mod_post: false,
      score: 1,
      approved_by: null,
      author_premium: false,
      thumbnail: "",
      edited: false,
      author_flair_css_class: null,
      author_flair_richtext: [],
      gildings: {},
      content_categories: null,
      is_self: true,
      mod_note: null,
      created: 1593066520,
      link_flair_type: "text",
      wls: null,
      removed_by_category: null,
      banned_by: null,
      author_flair_type: "text",
      domain: "self.react",
      allow_live_comments: false,
      selftext_html:
        '&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;In terms of time, and complexity, how different is developing in React vs React Native? I understand that this is a broad question but some idea to give context would be appreciated.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;',
      likes: null,
      suggested_sort: null,
      banned_at_utc: null,
      view_count: null,
      archived: false,
      no_follow: true,
      is_crosspostable: false,
      pinned: false,
      over_18: false,
      all_awardings: [],
      awarders: [],
      media_only: false,
      can_gild: false,
      spoiler: false,
      locked: false,
      author_flair_text: null,
      treatment_tags: [],
      visited: false,
      removed_by: null,
      num_reports: null,
      distinguished: null,
      subreddit_id: "t5_2su6s",
      mod_reason_by: null,
      removal_reason: null,
      link_flair_background_color: "",
      id: "hfaymg",
      is_robot_indexable: true,
      report_reasons: null,
      author: "trainermade",
      discussion_type: null,
      num_comments: 0,
      send_replies: true,
      whitelist_status: null,
      contest_mode: false,
      mod_reports: [],
      author_patreon_flair: false,
      author_flair_text_color: null,
      permalink:
        "/r/react/comments/hfaymg/how_different_is_react_dev_vs_react_native_dev/",
      parent_whitelist_status: null,
      stickied: false,
      url:
        "https://www.reddit.com/r/react/comments/hfaymg/how_different_is_react_dev_vs_react_native_dev/",
      subreddit_subscribers: 1214,
      created_utc: 1593037720,
      num_crossposts: 0,
      media: null,
      is_video: false,
    },
  },
  {
    kind: "t3",
    data: {
      approved_at_utc: null,
      subreddit: "react",
      selftext: "",
      author_fullname: "t2_2o8eg41j",
      saved: false,
      mod_reason_title: null,
      gilded: 0,
      clicked: false,
      title: "PERN Stack: Build a full stack YELP clone",
      link_flair_richtext: [],
      subreddit_name_prefixed: "r/react",
      hidden: false,
      pwls: null,
      link_flair_css_class: null,
      downs: 0,
      top_awarded_type: null,
      hide_score: false,
      name: "t3_hfao7e",
      quarantine: false,
      link_flair_text_color: "dark",
      upvote_ratio: 1,
      author_flair_background_color: null,
      subreddit_type: "public",
      ups: 1,
      total_awards_received: 0,
      media_embed: {
        content:
          '&lt;iframe width="600" height="338" src="https://www.youtube.com/embed/7qAXvOFhlDc?feature=oembed&amp;enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;',
        width: 600,
        scrolling: false,
        height: 338,
      },
      author_flair_template_id: null,
      is_original_content: false,
      user_reports: [],
      secure_media: {
        type: "youtube.com",
        oembed: {
          provider_url: "https://www.youtube.com/",
          version: "1.0",
          title: "PERN Stack Mega Course: Postgres Express React Node 6.5Hrs!",
          type: "video",
          thumbnail_width: 480,
          height: 338,
          width: 600,
          html:
            '&lt;iframe width="600" height="338" src="https://www.youtube.com/embed/7qAXvOFhlDc?feature=oembed&amp;enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;',
          author_name: "Sloppy Networks",
          provider_name: "YouTube",
          thumbnail_url: "https://i.ytimg.com/vi/7qAXvOFhlDc/hqdefault.jpg",
          thumbnail_height: 360,
          author_url:
            "https://www.youtube.com/channel/UC2sYgV-NV6S5_-pqLGChoNQ",
        },
      },
      is_reddit_media_domain: false,
      is_meta: false,
      category: null,
      secure_media_embed: {
        content:
          '&lt;iframe width="600" height="338" src="https://www.youtube.com/embed/7qAXvOFhlDc?feature=oembed&amp;enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;',
        width: 600,
        scrolling: false,
        media_domain_url: "https://www.redditmedia.com/mediaembed/hfao7e",
        height: 338,
      },
      link_flair_text: null,
      can_mod_post: false,
      score: 1,
      approved_by: null,
      author_premium: true,
      thumbnail: "",
      edited: false,
      author_flair_css_class: null,
      author_flair_richtext: [],
      gildings: {},
      content_categories: null,
      is_self: false,
      mod_note: null,
      created: 1593065533,
      link_flair_type: "text",
      wls: null,
      removed_by_category: null,
      banned_by: null,
      author_flair_type: "text",
      domain: "youtu.be",
      allow_live_comments: false,
      selftext_html: null,
      likes: null,
      suggested_sort: null,
      banned_at_utc: null,
      url_overridden_by_dest: "https://youtu.be/7qAXvOFhlDc",
      view_count: null,
      archived: false,
      no_follow: true,
      is_crosspostable: false,
      pinned: false,
      over_18: false,
      all_awardings: [],
      awarders: [],
      media_only: false,
      can_gild: false,
      spoiler: false,
      locked: false,
      author_flair_text: null,
      treatment_tags: [],
      visited: false,
      removed_by: null,
      num_reports: null,
      distinguished: null,
      subreddit_id: "t5_2su6s",
      mod_reason_by: null,
      removal_reason: null,
      link_flair_background_color: "",
      id: "hfao7e",
      is_robot_indexable: true,
      report_reasons: null,
      author: "sloppy_networks",
      discussion_type: null,
      num_comments: 0,
      send_replies: true,
      whitelist_status: null,
      contest_mode: false,
      mod_reports: [],
      author_patreon_flair: false,
      author_flair_text_color: null,
      permalink:
        "/r/react/comments/hfao7e/pern_stack_build_a_full_stack_yelp_clone/",
      parent_whitelist_status: null,
      stickied: false,
      url: "https://youtu.be/7qAXvOFhlDc",
      subreddit_subscribers: 1214,
      created_utc: 1593036733,
      num_crossposts: 0,
      media: {
        type: "youtube.com",
        oembed: {
          provider_url: "https://www.youtube.com/",
          version: "1.0",
          title: "PERN Stack Mega Course: Postgres Express React Node 6.5Hrs!",
          type: "video",
          thumbnail_width: 480,
          height: 338,
          width: 600,
          html:
            '&lt;iframe width="600" height="338" src="https://www.youtube.com/embed/7qAXvOFhlDc?feature=oembed&amp;enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;',
          author_name: "Sloppy Networks",
          provider_name: "YouTube",
          thumbnail_url: "https://i.ytimg.com/vi/7qAXvOFhlDc/hqdefault.jpg",
          thumbnail_height: 360,
          author_url:
            "https://www.youtube.com/channel/UC2sYgV-NV6S5_-pqLGChoNQ",
        },
      },
      is_video: false,
    },
  },
];
