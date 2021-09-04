import { IConfig } from './src/types'

const c: IConfig = {
  // [Mondatory], Please replace following Github url with your own Github address which you forked in. 
  gitRepoUrl: 'https://github.com/lkb123/nav',

  // Deployment branch name
  branch: 'main',

  // If routing is hash mode. if it deployed into github pages or using Vercel, it has to be set to true
  hashMode: true,

  // is it displaying the Github icon on top right corner of the web page
  showGithub: true,

  // what is your website address. It is good for your SEO
  homeUrl: 'https://pin.imdz.net',

  // Web Site Tiltle
  title: 'Imdz Pin danh bạ website lưu trữ liên kết những trang web thú vị',

  // Web Site description
  description: 'Imdz Pin danh bạ website là nơi lưu trữ hàng nghìn liên kết thú vị được imdz đánh giá và xác nhận uy tín. Chứa hàng nghìn liên kết giúp ích cho người sử dụng. Giúp bạn truy cập nhanh và dễ dàng hơn.',

  // Web Site Keyword
  keywords: 'danh bạ website, danh bạ web, những trang web, danh sách website, bookmarks, bookmart, những trang web, list website, học tập, tools thiết kế, lập trình, đồ hoạ',

  // Default Theme: Light | Sim | Side | App | Shortcut
  theme: 'Side',

  // The content at the bottom of the website, copyright information, record number, can be HTML
  footerContent: `
    <div style="font-weight: bold;">Total collected \${total} websites </div>
    <div>Copyright ©2021 imdz.net . All Rights Reserved</div>
  `,
// Sim Theme Configuration
  simThemeConfig: {
    // Post Image
    posterImageUrls: [
      'https://raw.sevencdn.com/xjh22222228/nav/image/sim-wallpaper.jpg'
    ],
    description: 'Here collected total <b>${total}</b> websites, helping your work, living and studying'
  }
}

export default c
