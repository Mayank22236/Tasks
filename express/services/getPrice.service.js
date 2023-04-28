var axios = require('axios').default;
const cherrio = require('cheerio');
const scrapURL = 'https://www.metal.com/Lithium-ion-Battery/202303240001';
const selector = '#__next > div > div.main___1ft3R.detail___2oeiJ > div.left___wCEQV > div:nth-child(3) > div.metalsContent___3T_m3 > div.priceContent___3lf_D > div > div:nth-child(1) > span.strong___1JlBD';

class GetPriceService {
    #getHtmlContent = async () => {
        try {
            const response = await axios.get(scrapURL);
            return response.data.toString();
        } catch (error) {
            throw error;
        }
    }
    async getLatestPrice() {
        try {
            const htmlContent = await this.#getHtmlContent();
            const $ = cherrio.load(htmlContent);
            console.log($, 'lsdjsldj');
            const price = $(selector).text();
            return price
        } catch (error) {
            throw error;
        }
    }
}

module.exports = GetPriceService;