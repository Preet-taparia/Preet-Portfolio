import { NextApiRequest, NextApiResponse } from 'next';

const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql';

const QUERY = `
  query userProfileStats($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      profile {
        ranking
        reputation
        realName
      }
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      badges {
        id
        displayName
        icon
      }
    }
    userContestRanking(username: $username) {
      rating
      topPercentage
      globalRanking
    }
  }
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    const response = await fetch(LEETCODE_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Referer: 'https://leetcode.com',
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { username },
      }),
    });

    const data = await response.json();

    if (data.errors) {
      return res.status(500).json({ error: data.errors });
    }

    return res.status(200).json(data.data);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}