import * as React from "react"
import Svg, { Defs, G, Path, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default ({ opacity = 1, fill = '#ffffff', ...props }: SvgProps) => {
  return (
    <Svg width={45} height={32} viewBox="0 0 45 32" {...props}>
      <Defs></Defs>
      <G filter="url(#prefix__a)" fill="none" fillRule="evenodd">
        <Path
          fill="#FF890B"
          fillRule="nonzero"
          d="M14.854 19.255c.048.084.102.164.16.242.05.069.122.12.204.142.106.025.213.039.322.041.141.01.282.011.424 0 .177-.01.438-.042.6-.069.1-.015.2-.038.297-.07.06-.021.115-.051.164-.092.062-.05.139-.13.219-.195.103-.077.211-.145.324-.205.15-.089.369-.215.566-.36a3.11 3.11 0 00.482-.43.86.86 0 00.193-.352c.046-.143.103-.343.166-.505.055-.145.129-.283.217-.41.08-.122.171-.236.228-.337a.899.899 0 00.098-.363 6.91 6.91 0 00.06-.771 5.216 5.216 0 00-.059-.82 1.806 1.806 0 00-.188-.6 3.999 3.999 0 00-.446-.662 3.041 3.041 0 00-.604-.566 4.972 4.972 0 00-.795-.43 7.167 7.167 0 00-.78-.294 5.765 5.765 0 00-.694-.172 1.723 1.723 0 00-.562-.02 3.87 3.87 0 00-.68.157 2.368 2.368 0 00-.498.23 6.87 6.87 0 00-.853.595c-.106.086-.18.145-.26.204-.081.06-.17.121-.252.185-.082.063-.157.126-.217.172a.551.551 0 00-.16.168 3.608 3.608 0 00-.227.46 5.885 5.885 0 00-.404 1.325 1.271 1.271 0 00-.017.413c.017.177.047.435.09.648.034.199.098.392.187.574.111.23.244.452.393.662.16.233.35.445.564.633.215.18.446.339.691.476.136.081.28.148.431.199.094.033.19.058.288.079.086.017.165.03.212.042.048.012.079.016.116.076z"
        />
        <Path
          fill="#E20A17"
          fillRule="nonzero"
          d="M23.275 14.419a.277.277 0 01-.007.077.246.246 0 00.02.107c.016.04.04.078.07.11.036.043.089.099.142.155.053.054.109.126.174.19.065.063.14.127.187.17a.833.833 0 00.087.068c.013.008.017.006.05-.032l.183-.212c.093-.104.221-.242.312-.347.091-.107.148-.179.221-.278l.295-.411c.132-.184.302-.438.417-.612.115-.176.174-.283.263-.435.09-.152.209-.353.33-.576.12-.223.236-.465.306-.636.056-.12.095-.247.113-.379a1.8 1.8 0 00.013-.33 1.278 1.278 0 00-.057-.323 4.05 4.05 0 00-.153-.484 3.034 3.034 0 00-.21-.428 2.453 2.453 0 00-.211-.3 1.623 1.623 0 00-.22-.229.888.888 0 00-.427-.2 1.562 1.562 0 00-.457.001l-.482.085a1.606 1.606 0 00-.46.182 1.77 1.77 0 00-.208.153 1.121 1.121 0 00-.278.341c-.024.049-.044.1-.061.151a.566.566 0 00-.03.145c-.002.06.001.12.006.18.01.058.011.118.012.148s.006.033-.005.035c-.01.001 0 0-.029-.022a1.123 1.123 0 00-.122-.115 2.092 2.092 0 00-.303-.213 1.256 1.256 0 00-.361-.131 2.28 2.28 0 00-.402-.051c-.13-.007-.261.001-.39.023-.178.031-.351.078-.52.138-.115.041-.228.093-.332.156a2.038 2.038 0 00-.384.314.868.868 0 00-.143.214 1.618 1.618 0 00-.109.286.737.737 0 00-.015.26c.008.113.028.225.06.335.031.113.079.22.142.32.073.128.16.249.257.362.146.162.306.31.48.443.225.184.544.416.788.58.244.163.42.267.575.36.155.093.286.176.405.255.117.08.207.16.28.214.075.052.101.08.13.106.027.02.048.047.058.079z"
        />
        <Path
          fill="#EC3C13"
          fillRule="nonzero"
          d="M29.66 7.09c.022.065.05.127.084.186.046.08.1.155.162.225a.596.596 0 00.15.12c.052.033.12.074.2.118.082.045.171.094.253.135.08.042.152.069.214.105a.98.98 0 01.303.274 1.1 1.1 0 01.116.229c.032.092.056.189.071.287.028.13.047.262.058.396.009.1 0 .2-.023.296-.025.1-.058.198-.1.292a1.519 1.519 0 01-.296.413 1.013 1.013 0 01-.137.105c-.046.03-.09.057-.14.086-.051.028-.107.059-.163.094-.042.029-.082.06-.121.093a.12.12 0 01-.046.032 3.161 3.161 0 00-.255-.033 2.62 2.62 0 01-.291-.045 4.308 4.308 0 01-.775-.323 2.533 2.533 0 01-.388-.254 4.282 4.282 0 01-.442-.401 3.684 3.684 0 01-.412-.507c-.1-.15-.188-.309-.263-.473a2.102 2.102 0 01-.11-.286 2.573 2.573 0 01-.072-1.17c.023-.124.057-.246.1-.363.047-.114.105-.222.173-.324a3.242 3.242 0 01.465-.545c.079-.07.163-.13.253-.184a1.116 1.116 0 01.436-.151c.063-.008.125-.013.187-.014a.69.69 0 01.182.015c.065.014.129.035.19.063.053.023.1.055.142.096a.247.247 0 01.063.12l.081.46c.014.078.009.115.017.203.008.088.03.223.045.323.015.098.03.174.036.206a.68.68 0 00.053.1z"
        />
        <Path
          fill="#A8C316"
          fillRule="nonzero"
          d="M33.58 6.875c-.016.031-.043.085-.066.137a.987.987 0 00-.055.144.114.114 0 00.018.104.855.855 0 00.115.145.177.177 0 00.096.054c.02-.003.03-.005.08-.087.05-.083.143-.205.237-.35.09-.136.17-.276.243-.42a1.43 1.43 0 00.113-.379c.025-.151.042-.304.049-.457.007-.105 0-.21-.018-.314a2.784 2.784 0 00-.089-.354c-.04-.129-.091-.269-.126-.374a2.434 2.434 0 01-.067-.248c-.012-.069-.033-.136-.053-.206-.023-.069-.05-.142-.078-.22-.026-.077-.05-.17-.077-.248-.027-.078-.057-.17-.087-.243-.028-.075-.06-.148-.095-.253-.034-.105-.07-.242-.101-.367-.032-.123-.058-.233-.085-.328a1.654 1.654 0 00-.23-.47c-.052-.07-.111-.138-.167-.213a4.203 4.203 0 01-.155-.229c-.045-.067-.078-.11-.114-.16a.746.746 0 00-.105-.117.214.214 0 00-.086-.05.12.12 0 00-.051-.005c-.01.002-.019.003-.019.023s.009.047.019.103c.006.081.008.163.005.245-.004.102-.016.222-.026.342-.011.12-.024.241-.042.367-.017.125-.043.231-.072.385-.029.152-.066.34-.093.49a6.9 6.9 0 00-.061.399 4.883 4.883 0 00-.04.525 8.66 8.66 0 00.009.756c.015.234.04.407.067.602.023.191.056.38.1.567.027.113.074.22.139.318a.548.548 0 00.12.136c.04.03.085.048.132.056a.91.91 0 01.167.025.206.206 0 01.091.07c.017.024.025.04.032.048.007.008.012.008.048.002.05-.012.098-.02.147-.026a.52.52 0 01.115.01c.04.006.09.009.112.014.023.004.019.027.003.05z"
        />
        <Path
          fill="#AC7791"
          fillRule="nonzero"
          d="M38.701 6.712a.34.34 0 00.062-.036.066.066 0 01.047-.009c.042.007.084.011.127.013a1.958 1.958 0 00.567-.106c.13-.054.255-.116.375-.188a3.54 3.54 0 00.858-.649 4.595 4.595 0 00.38-.427c.025-.033.03-.048.026-.058-.003-.01-.016-.019-.056-.026a1.615 1.615 0 00-.183-.016 1.503 1.503 0 00-.477.025l-.306.054c-.088.015-.137.009-.178.011h-.117c-.046 0-.092-.004-.137-.01a.747.747 0 00-.127-.007 1.07 1.07 0 00-.193.034c-.072.013-.14.039-.236.065l-.31.08-.221.06-.184.045a.595.595 0 00-.145.037.243.243 0 00-.089.044c-.033.026-.08.066-.131.111l-.155.14c-.05.048-.097.091-.14.127-.04.033-.079.068-.114.107a1.616 1.616 0 00-.135.21c-.007.016-.005.027.024.061.05.058.11.109.176.149.091.053.185.096.284.13.073.023.149.04.224.05.074.008.154.013.22.019.052.003.106.004.16.002a.423.423 0 00.104-.042z"
        />
        <Path
          fill="#559BB5"
          fillRule="nonzero"
          d="M35.914 9.255c.008.043.02.116.02.195l-.003.256c-.004.093-.003.187.004.28a.5.5 0 00.036.2c.03.06.074.114.126.157.064.06.134.112.207.157a.77.77 0 00.248.088c.122.024.244.041.368.05.14.013.28.015.421.007.156-.01.334-.032.565-.07a8.743 8.743 0 001.4-.335c.143-.045.283-.1.42-.163.116-.055.23-.118.337-.191a1.2 1.2 0 00.235-.199.538.538 0 00.097-.197.47.47 0 00.009-.2.942.942 0 00-.07-.233.438.438 0 00-.116-.16.769.769 0 00-.155-.092 1.786 1.786 0 00-.24-.109 1.862 1.862 0 00-.267-.057c-.098-.016-.215-.04-.318-.05-.102-.01-.196-.012-.283-.016l-.276-.014c-.111-.006-.25-.01-.385-.011-.136-.002-.267-.004-.404 0a4.608 4.608 0 00-.415.027 6.263 6.263 0 00-.35.048c-.097.015-.174.03-.276.048a2.53 2.53 0 00-.333.099c-.1.036-.195.083-.286.14a1.634 1.634 0 00-.291.252.127.127 0 00-.025.093z"
        />
        <Path
          fill="#923724"
          fillRule="nonzero"
          d="M32.354 13.816c-.036.08-.069.162-.097.246-.023.06-.04.124-.052.188a.317.317 0 00.01.137c.014.07.031.14.053.208a.442.442 0 00.113.172c.08.085.166.166.257.239.077.057.16.106.245.147l.288.148c.077.037.15.08.22.132.072.056.138.117.198.186.063.071.125.158.186.23.061.072.13.156.203.24.063.074.136.141.215.2a.855.855 0 00.197.1c.084.032.17.057.259.074.136.026.274.042.413.049.113.008.227.005.339-.011a2.365 2.365 0 00.853-.258 2.6 2.6 0 00.355-.243c.105-.08.197-.16.271-.226a1.643 1.643 0 00.333-.399c.045-.077.087-.157.122-.239.042-.091.09-.195.116-.282a.617.617 0 00.047-.25 2.994 2.994 0 00-.063-.514c-.04-.232-.132-.516-.198-.738a2.489 2.489 0 00-.19-.473 1.237 1.237 0 00-.484-.506.87.87 0 00-.297-.107c-.045-.007-.091-.013-.15-.026-.057-.013-.124-.029-.213-.042a2.484 2.484 0 00-.29-.027c-.096-.003-.19 0-.285.01a3.596 3.596 0 00-.398.062c-.139.029-.275.07-.405.127a2.43 2.43 0 00-.35.196 2.995 2.995 0 00-.515.434.944.944 0 01-.299.237.564.564 0 01-.153.047l-.213.037c-.069.012-.127.023-.183.052a1.067 1.067 0 00-.16.063.347.347 0 00-.13.12c-.061.082-.118.17-.167.26z"
        />
        <Path
          fill="#497422"
          fillRule="nonzero"
          d="M27.95 17.89a.152.152 0 00-.044-.005.113.113 0 00-.059.02c-.024.015-.054.04-.087.066a.98.98 0 01-.107.066.304.304 0 01-.09.036.279.279 0 01-.092 0 .281.281 0 01-.06-.019.067.067 0 00-.036-.004c-.01.002-.02.004-.054.038a1.633 1.633 0 00-.15.175 1.73 1.73 0 00-.142.204.943.943 0 00-.094.23 3.468 3.468 0 00-.079.34 1.173 1.173 0 00-.02.282c.005.119.018.236.04.352.02.109.051.216.096.319.05.123.11.244.182.358.068.11.146.212.234.307.067.079.14.152.218.22a.969.969 0 00.404.225c.115.037.232.065.35.085.153.025.349.048.524.062.175.013.326.017.462.022.136.005.256.01.472.01.216.002.538-.005.923-.019.386-.014.87-.047 1.211-.071.342-.025.553-.044.814-.073.26-.027.576-.06.81-.088l.607-.068.677-.083.246-.043c.025-.005.025-.005.015-.04a.643.643 0 00-.08-.164 3.468 3.468 0 00-.276-.37 3.115 3.115 0 00-.362-.343c-.13-.106-.275-.21-.596-.453-.321-.243-.829-.631-1.113-.853-.283-.221-.364-.278-.457-.345a4.923 4.923 0 00-.265-.18.697.697 0 00-.196-.096l-.557-.222c-.216-.086-.432-.171-.616-.241a9.736 9.736 0 00-.489-.168c-.15-.05-.297-.078-.418-.107a2.659 2.659 0 00-.326-.046 2.602 2.602 0 00-.38-.007c-.103.005-.206.019-.308.042a.602.602 0 00-.29.142.58.58 0 00-.106.148.66.66 0 00-.056.161.344.344 0 00-.005.113c.005.025.007.037.096.053l.347.057c.12.023.24.054.355.093l.56.18c.097.028.193.061.286.1.056.026.09.056.22.124.13.067.36.17.486.222.126.052.153.052.177.05a.237.237 0 01.071-.002.12.12 0 01.057.038c.021.024.043.047.07.067.04.033.115.08.33.21.216.13.573.345.776.47a7.785 7.785 0 01.376.241c.014.012.02.024.014.027-.007.002-.025-.006-.12-.057-.096-.051-.273-.149-.423-.228-.151-.08-.28-.144-.405-.206l-.35-.17a6.932 6.932 0 01-.209-.107.212.212 0 00-.088-.035c-.029.005-.074.013-.101.01a.064.064 0 01-.053-.014.28.28 0 00-.061-.04.189.189 0 00-.081-.022c-.03-.004-.056 0-.083-.006a.498.498 0 01-.12-.06 4.257 4.257 0 01-.232-.14.443.443 0 01-.102-.08.276.276 0 00-.042-.043.068.068 0 00-.055-.008c-.027.005-.062.02-.082.024a.054.054 0 01-.05-.01 1.394 1.394 0 01-.089-.049.57.57 0 00-.158-.073 3.487 3.487 0 00-.283-.067 1.954 1.954 0 01-.203-.058c-.04-.017-.053-.031-.088-.043-.034-.012-.088-.024-.156-.043a2.399 2.399 0 01-.193-.07.506.506 0 01-.117-.068.479.479 0 00-.064-.056.092.092 0 00-.068-.012.05.05 0 00-.033.03c-.006.011-.013.018-.023.02a.082.082 0 01-.043.008.147.147 0 01-.044-.017c-.012-.009-.024-.02-.025-.028-.002-.01.007-.017.018-.023.012-.006.028-.006.031-.006.004 0-.003-.02-.018-.023a.162.162 0 00-.056-.01l-.093-.025-.088-.023-.045-.016z"
        />
        <Path
          fill="#0070BC"
          fillRule="nonzero"
          d="M20.058 23.262c-.052.085-.129.203-.206.357a5.635 5.635 0 00-.206.47c-.046.11-.079.227-.097.345-.02.139-.028.278-.025.418a1.602 1.602 0 00.213.864c.064.116.143.222.236.317.09.09.192.17.299.24a2.85 2.85 0 00.676.341 6.48 6.48 0 001.17.3c.238.037.478.06.732.08.255.019.498.044.776.058.277.014.578.02.791.017.214-.003.34-.014.587-.033l.867-.056c.25-.018.384-.027.626-.062.241-.035.592-.092.87-.153.213-.049.422-.111.627-.187.153-.053.264-.098.409-.142.22-.062.44-.113.665-.153.338-.06.83-.146 1.16-.195.329-.049.498-.057.72-.077.224-.02.5-.05.674-.061.175-.013.24-.01.308-.012.058-.006.117-.017.174-.03.038-.007.044-.009.045-.029a.218.218 0 00-.013-.07c-.003-.02-.018-.022-.22-.094a94.16 94.16 0 00-.817-.292l-.324-.11a.188.188 0 01-.076-.036c-.019-.017-.038-.045-.116-.116a5.212 5.212 0 00-.42-.35c-.21-.164-.516-.374-.753-.54l-.58-.405c-.17-.117-.337-.231-.464-.323-.128-.09-.209-.164-.33-.234-.123-.07-.25-.136-.398-.215a7.776 7.776 0 00-.456-.23c-.168-.077-.362-.156-.551-.234-.19-.078-.373-.156-.578-.227a15.988 15.988 0 00-.65-.205c-.225-.066-.454-.134-.651-.183a6.464 6.464 0 00-.596-.118c-.233-.037-.534-.085-.736-.094a2.953 2.953 0 00-.392-.016c-.104 0-.22-.002-.358.004a4.513 4.513 0 00-.477.046c-.164.024-.325.06-.483.109-.187.053-.37.125-.546.213a2.702 2.702 0 00-.468.305 2.18 2.18 0 00-.265.257 1.858 1.858 0 00-.132.172c-.039.054-.077.114-.112.17-.035.053-.075.114-.128.2z"
        />
        <Path
          fill="#FFF"
          fillRule="nonzero"
          d="M12.522 16.063c.004.023-.01.058-.013.089-.001.03.004.059.016.086.01.025.031.042.058.046.035.006.071 0 .104-.018a.097.097 0 00.038-.081.18.18 0 00-.013-.08.256.256 0 01-.025-.045c-.002-.011.008-.022.018-.036a.18.18 0 00.032-.057.202.202 0 00.009-.093.088.088 0 00-.043-.06.11.11 0 00-.08-.01.145.145 0 00-.072.037.125.125 0 00-.041.055.205.205 0 00-.012.07c0 .016.002.03.008.046.01.015.016.033.016.051zm9.36-4.214c.013.038.035.07.063.098.03.032.067.06.107.079a.107.107 0 00.081.012.622.622 0 00.099-.05.707.707 0 00.114-.077.231.231 0 00.062-.101.3.3 0 00.026-.106.202.202 0 00-.038-.122.41.41 0 00-.107-.113.064.064 0 00-.082-.005.435.435 0 00-.084.084c-.029.034-.056.073-.08.106a.947.947 0 01-.067.087.382.382 0 01-.065.063c-.02.015-.034.021-.03.046zm8.034-3.482c.002.01.02.017.03.029.016.012.026.03.033.05l.015.085c.007.022.02.042.036.058a.087.087 0 00.056.025.178.178 0 00.064-.011.105.105 0 00.045-.045.135.135 0 00.007-.072.123.123 0 00-.03-.074.11.11 0 00-.064-.03.39.39 0 00-.059-.003.093.093 0 01-.043-.019.229.229 0 00-.054-.02.05.05 0 00-.038.006c-.004.006-.002.014.002.02zm-.063.997a.124.124 0 00.067.032.13.13 0 00.06-.011.073.073 0 00.043-.04.279.279 0 00.023-.078.356.356 0 00-.011-.122l-.046-.26c-.011-.064-.022-.067-.033-.072a.111.111 0 00-.037-.012c-.02 0-.04.004-.058.01l-.054.01a.073.073 0 00-.036.024.202.202 0 00-.022.047.128.128 0 00-.005.078c.007.062.018.126.033.187a.457.457 0 00.025.07l.01.06c.007.029.021.055.041.077zm9.529-.104l.02-.031a.097.097 0 01.023-.03.14.14 0 01.082-.001.087.087 0 01.042.028.104.104 0 01.007.042l.008.047a.064.064 0 01-.02.033.254.254 0 01-.093.063.053.053 0 01-.034.006s-.014-.009-.018-.033l-.016-.09c-.004-.022-.007-.026-.001-.034zm-2.393.162l.317-.056c.08-.015.085-.015.087-.024l.02-.003a.201.201 0 01.059-.01.03.03 0 01.022.012s.012.01.034.012c.022.001.054 0 .076-.001.02 0 .03-.005.037.01a.033.033 0 01.007.04.23.23 0 01-.055.082.254.254 0 01-.117.052.808.808 0 01-.178.01c-.064-.003-.124-.014-.183-.02-.058-.006-.094-.016-.126-.024a.236.236 0 01-.068-.029c-.009-.029-.01-.034.068-.05zm-2.942 11.074c-.01.001-.018.021-.018.044a.375.375 0 00.012.066.059.059 0 01.006.037s-.01.013-.011.025a.114.114 0 00.009.051.106.106 0 00.024.032c.01.008.016.02.023.03a.328.328 0 00.024.048.07.07 0 00.043.025.055.055 0 00.046-.008.254.254 0 00.038-.044.155.155 0 01.038-.037c.014-.002.026-.004.03-.022a.095.095 0 00-.01-.053.145.145 0 00-.032-.047c-.017-.014-.04-.035-.057-.046a.224.224 0 00-.038-.021.473.473 0 01-.077-.052c-.036-.017-.05-.03-.05-.028zm-6.154-.415c.036.07.079.134.128.195a1.438 1.438 0 00.581.409c.092.035.186.065.28.09.062.017.072.023.08.032a.083.083 0 00.033.023.146.146 0 00.05-.009.184.184 0 01.092.007c.059.011.165.037.267.058.086.015.173.025.26.031.06.006.085.002.09-.001.005-.005-.002-.01-.058-.025a2.912 2.912 0 01-.241-.076 2.974 2.974 0 01-.285-.116c-.069-.033-.091-.045-.11-.052a.135.135 0 00-.053-.011.503.503 0 01-.105-.032 3.546 3.546 0 01-.437-.216.132.132 0 01-.059-.064.108.108 0 00-.024-.042.122.122 0 00-.055-.024.353.353 0 00-.058-.004.138.138 0 01-.062-.012 1.144 1.144 0 01-.126-.077l-.141-.097c-.033-.022-.04-.024-.045-.027l-.008.002s-.012 0 .007.039z"
        />
        <Path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.735}
          d="M28.32 17.985c0 .011.003.023.007.033.002.01.002.01.011.008a.014.014 0 00.01-.013.058.058 0 00-.005-.032s-.02-.006-.022.004z"
        />
        <Path
          fill="#FFF"
          fillRule="nonzero"
          d="M23.854 22.967l.042.013c.015.004.026.015.046.02.03.006.06.007.091.004a1.05 1.05 0 01.136-.014c.08.002.161.009.24.018.087.01.167.022.24.023.06 0 .118-.005.176-.016a.673.673 0 00.109-.019c.02-.003.017-.014-.004-.02a1 1 0 00-.134-.011l-.287-.024c-.091-.01-.16-.02-.211-.026-.052-.005-.09-.001-.122-.001a1.034 1.034 0 00-.285.036c-.033 0-.042.011-.038.016zm-.948.318l-.064.024a.126.126 0 00-.047.02c-.009.002.002.012.023.025.04.018.08.033.122.045.052.015.107.022.153.032.039.01.077.016.116.02a.264.264 0 00.095-.016c.032-.016.065-.036.093-.05.028-.014.046-.018.06-.027.012-.007.014-.019.005-.024a.11.11 0 00-.047-.012l-.095-.008-.125-.017a.554.554 0 01-.092-.022.092.092 0 01-.035-.026.14.14 0 00-.031-.028.039.039 0 00-.03.005.114.114 0 00-.044.008.086.086 0 00-.024.027.096.096 0 01-.033.024zM3.108 23.16l.076.433a.29.29 0 00.057.15c.053.087.113.163.179.23.113.104.23.197.351.278.103.073.162.112.226.158a1.142 1.142 0 01.302.314c.032.046.058.084.088.134.031.05.067.118.105.173.041.06.09.112.14.155.079.066.163.121.248.166.217.114.441.18.664.198l.375.042c.111.011.185.022.28.035l.334.048.335.045c.094.011.162.022.377.039.215.018.58.046.854.058s.457.007.654 0c.199-.009.413-.021.729-.063a15.714 15.714 0 002.282-.458 31.29 31.29 0 001.053-.317c.325-.102.611-.19.85-.26.24-.068.418-.111.598-.155.18-.042.36-.083.609-.156.25-.072.568-.177.844-.277.276-.1.51-.197.697-.267.185-.07.32-.118.421-.157.1-.039.161-.075.388-.192s.617-.32.937-.48c.32-.16.57-.28.811-.41l.691-.362c.212-.108.4-.2.56-.277l.546-.276.811-.43c.204-.11.26-.142.295-.155.037-.014.057-.01.099-.018.16-.071.315-.159.462-.26.35-.208 1.004-.596 1.56-.951a34.128 34.128 0 001.375-.92c.35-.248.584-.425.873-.653.288-.229.63-.51.926-.767.295-.257.541-.49.756-.696a47.95 47.95 0 001.183-1.206c.185-.195.348-.374.503-.542.152-.17.298-.33.549-.59.25-.259.609-.611.948-.95.338-.337.658-.654.908-.911.25-.255.44-.436.607-.625.168-.19.343-.36.476-.507.135-.146.236-.26.34-.387.104-.126.212-.26.35-.431.137-.17.293-.37.43-.557.137-.188.248-.364.346-.516.098-.152.18-.28.253-.403.074-.123.142-.235.205-.351.065-.117.126-.242.191-.38.066-.136.145-.287.223-.453a12.674 12.674 0 00.377-.87l.064-.162c.01-.028.012-.04.01-.045 0-.005 0 0-.01-.007a.206.206 0 01-.037-.006.07.07 0 01-.039-.033.428.428 0 01-.019-.063c-.003-.017-.005-.028-.016-.026-.011.002-.014.013-.014.033.002.025.007.05.013.075a.7.7 0 01.008.08.275.275 0 01-.006.078.182.182 0 01-.024.06l-.024.03a.052.052 0 01-.023.018.115.115 0 01-.036.007c-.009.001-.01.001-.012-.009-.001-.007 0 0 .004-.015l.03-.04a.057.057 0 00.014-.035.015.015 0 00.002-.012c0-.004-.002-.009-.006-.01 0 0-.013.001-.043.04-.031.037-.08.125-.124.2a1.63 1.63 0 00-.158.383c-.009.037-.01.044-.006.046.003.001.01-.002.018-.02l.027-.058c.007-.016.01-.018.014-.017.004.001 0 0 .002.01a.374.374 0 01-.022.064l-.093.206c-.038.084-.097.18-.129.239a.775.775 0 01-.077.11.158.158 0 01-.04.036c-.007 0-.01.001-.003-.016a.513.513 0 01.05-.11c.038-.063.1-.165.144-.23a.943.943 0 00.064-.108.107.107 0 00.012-.049.086.086 0 00-.007-.038c-.001-.01-.007-.009-.018.003l-.047.07c-.026.04-.07.097-.112.161a6.195 6.195 0 00-.17.298l-.326.588c-.098.18-.168.294-.222.387-.053.092-.1.161-.126.202a.599.599 0 01-.057.076.076.076 0 01-.026.021s-.01.002-.01.011a.587.587 0 01-.061.196c-.006.007-.012.012-.02.012-.008.002-.013.003-.016-.015a.326.326 0 01.007-.046.125.125 0 00.005-.053.06.06 0 00-.019-.037c-.01-.005-.02-.003-.027.005a.104.104 0 00-.019.05l-.01.085a.347.347 0 01-.054.157c-.01.012-.014.015-.018.013-.003-.003-.004-.007-.002-.012 0-.008.003-.017.006-.024a.081.081 0 00.015-.036.09.09 0 00-.008-.046c-.004-.01-.01-.014-.018-.013-.006.001-.012.002-.017.02a.552.552 0 01-.038.08c-.028.048-.076.121-.125.201-.049.08-.104.144-.138.195a.385.385 0 00-.068.161c.003.018-.002.033-.003.041-.001.007 0 0-.008.002l-.013-.017a.046.046 0 00-.02-.021.04.04 0 00-.034.006c-.011.005-.02.016-.023.032a.215.215 0 00-.005.053c.002.016-.003.031-.014.039a.114.114 0 00-.064.032.532.532 0 00-.163.17.408.408 0 00-.063.127.185.185 0 00.003.059c.003.016.005.026-.001.032-.02.011-.04.02-.062.026a.56.56 0 00-.117.069.618.618 0 00-.119.13 1.296 1.296 0 00-.133.24.101.101 0 00-.007.038s.002.01.01-.002a.302.302 0 00.03-.04c.014-.02.03-.042.048-.06a.185.185 0 01.05-.042l.011-.002a.066.066 0 01-.008.037.272.272 0 01-.043.058l-.069.075a.512.512 0 01-.051.05.059.059 0 01-.032.016s-.01.002-.014-.01l-.002-.015a.03.03 0 00.008-.02.193.193 0 00-.008-.047c-.002-.01-.01-.008-.014.003a.061.061 0 00-.031.017.43.43 0 00-.059.07c-.022.035-.049.08-.072.121l-.053.1a.12.12 0 01-.017.034c-.003.003-.01.002-.013.002l-.006-.036-.004-.02a.105.105 0 00-.043.04c-.03.03-.077.084-.108.126a.492.492 0 00-.053.087.072.072 0 00-.009.046l.018.104-.032.006-.07-.008-.058-.002a.148.148 0 00-.041.007.09.09 0 00-.032.031.103.103 0 00-.015.044c0 .013.002.026.007.037.002.007.008.012.012.01l.021-.016.022-.013a.024.024 0 01.023-.004.06.06 0 01.017.027c.004.013.007.029.007.043a.053.053 0 01-.008.035.032.032 0 01-.032.006c-.02 0-.04-.004-.06-.007l-.033-.02a.064.064 0 00-.041-.007.088.088 0 00-.04.02c-.01.005-.017.019-.017.035a.101.101 0 00.015.044c.001.01.012.012.014.02a.062.062 0 01-.004.044.312.312 0 01-.042.055l-.033.029a.291.291 0 01-.05.032c-.018.01-.038.017-.057.023l-.023.004c-.004 0-.002-.009-.01-.011l-.01.001.003.016a.405.405 0 01-.003.051.16.16 0 01-.058.097.423.423 0 01-.053.035.095.095 0 01-.05.019l-.124.022c-.03.005-.032.005-.03-.004s.007-.016.04-.066l.142-.205a.947.947 0 01.107-.125.27.27 0 01.074-.056l.063-.011a.02.02 0 00.012-.009.03.03 0 00.003-.02.169.169 0 01.008-.07.304.304 0 01.079-.09c.036-.03.078-.058.113-.09a.317.317 0 00.096-.157c.005-.015.008-.023.035-.031.027-.008.076-.014.106-.02a.134.134 0 00.073-.067c.035-.05.094-.138.136-.204a.49.49 0 01.084-.099.08.08 0 01.047-.021l.054-.01c.014-.002.017-.003.033-.03.015-.028.046-.066.257-.35.21-.283.603-.805.834-1.122.23-.317.31-.433.399-.553.088-.12.165-.245.264-.395l.298-.459c.083-.131.14-.218.187-.297l.142-.235c.052-.089.115-.2.172-.287l.136-.227c.026-.046.03-.057.031-.072a.153.153 0 00-.025-.087.193.193 0 01-.008-.047c0-.015.002-.028.006-.042l.016-.054a.097.097 0 01.03-.04.032.032 0 01.036-.006c.017.01.038.028.053.038.014.01.018.009.02-.004.004-.013.012-.014.025-.051.014-.037.04-.095.084-.194.043-.1.11-.223.17-.334l.166-.306.196-.349.255-.43c.079-.131.137-.232.198-.343.06-.112.128-.238.183-.347.057-.109.108-.198.163-.313.054-.117.115-.246.173-.376.058-.131.116-.256.17-.38.052-.124.099-.244.14-.35l.121-.308c.043-.106.089-.229.16-.41.071-.182.159-.416.21-.555l.071-.201c.01-.022.013-.026.012-.038l-.008-.047c-.002-.012-.003-.014-.015-.012l-.043.008c-.01.002-.013.002-.064.105a31.82 31.82 0 01-.913 1.646c-.23.393-.474.803-.745 1.248l-.773 1.258-.38.605c-.063.1-.08.123-.09.138-.011.014-.016.022-.015.029 0 .007.003.014.013.016l.018-.003s.002.01-.007.024l-.068.066a.539.539 0 00-.09.103c-.036.05-.076.125-.175.276-.098.15-.253.38-.377.56-.125.18-.218.31-.295.422-.08.113-.14.205-.2.295-.057.092-.11.188-.157.266l-.12.2a2.062 2.062 0 01-.24.32c-.174.2-.486.55-.68.775a5.549 5.549 0 00-.345.42c-.065.093-.123.16-.156.208a.955.955 0 01-.18.21c-.139.136-.407.383-.69.661-.285.279-.58.588-.905.914-.324.326-.674.67-.912.894a6.63 6.63 0 01-.435.38.496.496 0 01-.094.068l-.027.005a.32.32 0 00-.016.06.089.089 0 01-.025.05c-.013.015-.036.027-.052.047a.195.195 0 00-.035.071l-.018.06c-.007.013-.017.017-.059.045-.041.028-.115.076-.273.2-.157.126-.41.327-.624.507-.214.18-.392.334-.618.53-.227.196-.505.43-.775.64-.27.21-.53.4-.693.51-.164.11-.227.141-.343.218-.115.078-.285.198-.575.393s-.72.466-.972.628c-.253.16-.334.21-.576.335-.24.128-.64.328-.987.5-.348.17-.644.306-.952.449-.307.142-.626.29-1.197.526-.57.238-1.41.566-1.994.795-.586.228-.92.357-1.253.48-.333.124-.66.243-.895.324a7.528 7.528 0 01-.67.2c-.287.074-.721.181-1.154.278-.433.097-.87.184-1.47.282-.598.099-1.358.21-1.917.288-.559.077-.914.12-1.299.163-.386.043-.801.08-1.146.12-.346.041-.62.077-.91.11a16.718 16.718 0 01-1.863.101 4.528 4.528 0 01-.656-.064l-.42-.062a.304.304 0 00-.117-.004.064.064 0 00-.036.022.174.174 0 00-.016.039c-.005.01-.014.018-.024.02a.035.035 0 01-.028-.007.044.044 0 00-.036-.007.308.308 0 00-.112.036.63.63 0 00-.104.085.086.086 0 01-.05.03.292.292 0 01-.085-.035l-.204-.096a.481.481 0 00-.198-.03.32.32 0 00-.225.06.087.087 0 00-.03.031c-.004.008-.008.014.01.13z"
        />
      </G>
    </Svg>
  )
}
