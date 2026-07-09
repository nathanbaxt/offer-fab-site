export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const HomePartsFragmentDoc = gql`
    fragment HomeParts on Home {
  __typename
  business {
    __typename
    phone
    phoneHref
    email
    address
    hours
    instagram
    instagramUrl
  }
  hero {
    __typename
    kicker
    titleLine1
    titleLine2
    titleLine3
    sub
    ctaPrimary
    ctaSecondary
    image
  }
  materials {
    __typename
    name
    sub
  }
  intro {
    __typename
    kicker
    heading
    body
  }
  capabilities {
    __typename
    kicker
    heading
    sub
    items {
      __typename
      title
      body
    }
  }
  feature1 {
    __typename
    kicker
    heading
    body
    image
    points {
      __typename
      strong
      rest
    }
  }
  work {
    __typename
    kicker
    heading
    sub
    items {
      __typename
      image
      tag
      caption
      alt
      size
    }
  }
  projects {
    __typename
    kicker
    heading
    sub
    companies {
      __typename
      name
      logo
    }
    note
  }
  feature2 {
    __typename
    kicker
    headingLine1
    headingLine2
    body
    cta
    image
  }
  stats {
    __typename
    value
    label
  }
  industries {
    __typename
    kicker
    heading
    items {
      __typename
      name
    }
  }
  process {
    __typename
    kicker
    heading
    steps {
      __typename
      title
      body
    }
  }
  contact {
    __typename
    kicker
    heading
    sub
    formEndpoint
  }
  faq {
    __typename
    kicker
    heading
    items {
      __typename
      q
      a
    }
  }
  ctaBanner {
    __typename
    heading
    image
    ctaPrimary
    ctaSecondary
  }
  footer {
    __typename
    blurb
  }
}
    `;
export const HomeDocument = gql`
    query home($relativePath: String!) {
  home(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeParts
  }
}
    ${HomePartsFragmentDoc}`;
export const HomeConnectionDocument = gql`
    query homeConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeFilter) {
  homeConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeParts
      }
    }
  }
}
    ${HomePartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    home(variables, options) {
      return requester(HomeDocument, variables, options);
    },
    homeConnection(variables, options) {
      return requester(HomeConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.4/content/7f351e90-5d25-40bb-bbe0-662ccfe809bf/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
