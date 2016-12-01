import article from './article';
import getFlags from './flags';
import axios from 'axios';

export default async function() {
  const d = await article();
  const flags = await getFlags();
  const endpoint = 'http://bertha.ig.ft.com/view/publish/gss/13EB-5GbFnLx_1BjI6dIed3F9SobAetJG7gNaj2So5oA/data';
  const cards = {};
  let data;

  try {
    const res = await axios(endpoint);
    data = res.data;
  } catch (e) {
    console.log('Error getting content from Bertha');
  }

  try {
    cards.unfilled = data.filter(d => d.style !== 'selected');
    cards.selected = await Promise.all(data.filter(d => d.style === 'selected')
      .map(async d => {
        const url = `https://ig.ft.com/onwardjourney/v1/thing/${d.topicid}/json?limit=5`;
        const res = await axios(url);
        d.links = res.data.items;

        return d;
      }));
  } catch(e) {
    console.error('Error getting Onward Journey');
  }



  return {
    ...d,
    cards,
    flags,
  };
}
