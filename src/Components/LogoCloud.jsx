import React from "react";
import styles from "./Styles/Styles.module.css";

const LogoCloud = () => {
  const logos = [
    {
      companyName: "nuxt",
      companyLogo:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAADCCAMAAACYEEwlAAAA81BMVEX///8vSV4AxY4Qh3UfPlarsrk8U2YAw4mi48scyJMAgm8AwIOkyMEAwocAMUwjjXwAfGcmQ1kTOFEbPFT0/Pn09fbV8ufr+fS+19JIzqEvRl0LNE4AL0vK7+G66tgryZeJ3L5mp5vm8O5QnY/b3uFg06uA2rpw1rLf9e2x59OXwbnO4d2y0MoAy5F4hZGYoarG3Ni9w8ji5OdgcH+BtavLz9MwP1tU0Kbq8vExT2GZ4cZyraJNYHFEmImQmqR9iZVqeYaxuL46i4EklHstUmIienIWuIoyO1oncG4vZGkfpYMjeHEUSVgXrIQuXGcraGupvb40ZxzBAAALMUlEQVR4nOWd6ULbOhCFE9oSCE0JW5dQaEtLoYV0L92329v9dnn/p7k2iZN4jkYeW6Ol8P0EO1iDpDOaIzmtVjAuXdza2l8P9/fSY3u3d8zS3O2LsZ8lEgudXmduTKd37TSGYX+xN1diaS/2IwVne2mO0lk8ZXODIQY5pyoKF80x6FyL/WAhMYYgj8Lt2E8WjusdLgpL+7GfLRSXzIPhmCuxHy4Uz9iOMDfX2479dGHYsnSEjNiPF4ZFaww6L2M/XwgWetYgzPVOQ7JgmRBGXWE39hP65zYNAgRl6cQvpfbprNi5fo1G4cTnjVeg+7e26CTRuxP7Kf1ibDAEphP7Mf0C/SDv+pBBdq7Hfk6fvKSz4GgShMly6VLsJ/XHOqQI42oSKMazuA/qkz3a2CIxggRqaSvuk/oD5XGSIp8emTTIYwEsqnoLER/UI9sgjzPLZlhen1CZhH4wW0BBmTyRlTaUx1IpDUpuJ1Em1+FfTcwWWEidwErbLm0jrRvcgSnjxMkkOA0dmP5BJhdjPKhPBC0UxOnvRtTXd7mEkmHnweHhgx1PT+wB0awHSws6d85y+Ua3383o928eentsVYT6V6GiMxye6XbPjMkicd7js2shzoRof2Fkcv1N/0yJ7nL6o0KcE1sz6wk7014wof/AZwMUwNURW0S0rLEm7PQhBH9BFGqsky2r7YIN7AajKCQ9ImpVTNi6y4SbTBDOLHtthSO1amdsBa7gsnEwHM+Od702w4maVVSmFjuBC0E+IDa8NsSB2vV02hPKM8hdbjDkXeGVx3Y4UdtZsRpS6+xgSHlubOCx2cJ2w9IRMt74bEpzYEdGdRnZ4NkWvzqwdoSsK1z22ZamLFRMc0b4qfSNPQYZXlvTDBQ80Q4MENXxXYd0MED+nKJMVqc+Rrj0Cpp84wn9Uf+51wY1QJAEmzHPJCCPmRpgXHw2qAmS5ZAR45LrOZ0Vu09arfMQmAOvTaqNbGFsxLT4Bnns5lcukx+mtoSAfiB3Egx5JsjjqJ70AH6cVLVNXiwzAAW54T/MvxxWlV0/zWlErbIpQoIw/PgvM/ihxpJPFalQaTnZoUX6o6NP5abeLK5MWCadrZRSPWr4adB+wbUUxsNNy8cGBWpqdbevl6L4+Uu7PfjK9HlIJFORSQV7dcaQGn4btLMocLNfqjKpYLRPZXL4/aidB+HbNAYlHWTUMzZoOTU43DT5kOGLvCNkUfjE/KvNeVRklDbfFDFYPu4IWRAKmaSD3phRxwb85WbbsMZ59+I4BlkUfoyaCKsk09oqMiCPTTfkHUvM8MegCMJYJg1l5fRkUm3PyXE0c3mcdIVcJk2VE5TJyLYcyGPzTbp7nbnhr2lHGMuk6UqsvDVvgAaK27XXe2N5nAThG1NNTUwmVTfuv+y0yxx9YurqIJP9iMfqlI9wLA9IFP5j5n3wZWIaUrq7lDdWSQzaaw+ZSxOSSeVjXfdWaBDaK9y1dGbsRjOkGlhOFm5dgBi0z95nLgbXPpYh1chy4nmNHaHd3uQs+DfgVLr87eZATc3p0O9DmBGOx8N75nKstEUxpBpaThymfpBx4RZz/asUZNJiKDfh/llzENqvmRvWUzCkGltORjYMs+KI1Q/MLQkYUg6Wk4n3zGjIFYK7J36lDfqBujxOgvCWuSm6IeVkOSHzfAyyuZGTyciGlKPlRPlglMeCGjIZtNKmLI+cMozZfMrcF9WQQsvJ6T05byuCsDLP3Rmz0uZsOZV4BLMilYrVc8ytEWVSWR4f0zbPw3pylbs3nkxCP3A62/l0k7b4IaROrExGq7SpWE5T5um//bUhib7wiLk7kiGFNTUneTy3RtubL5loYFYeM7dHMqTqHmmsgKYIo6wAFtY1ZDJApU3NchrxDjr+KD/EEgv3CTFkUveYM8hjUVCD1cQaJ5MRDCnlA+8gj5PSKsgkW2kDmfReadN9Q5BBHotfbdBfrbxjPiS4TCq/BIOO+5WZOtJ9kA2xTPo9IaX8OhSzPBbYIlQisCGlbDlBj783++uH/FghBDWkahwClvCuYu7jZ00KnRl9GlKeLSeqgo+u0gsSMKTwlIqy5USvqOoqU8IZUp4tp1XIjMGnLk8aMwQzpJRfpShZI9nlY5ZAhpS25SRKA6AMLZdJL4aUsuVE9e+sMSG0pJSEIJU23JGhazkxFTSQSdaQojOjj4PE0A/8ymMBLjMjGlJV7zqoyWvSNL6qDvX4eIZU5Vsv6gGWE1s4arXoBBrPkPJsObElxIwPNAqxDKnGh4DNQBe/yq2Sc2g5uoYhpSqTupbTc7omYCe7Y0Am16Ls2/C9I2NN63qfhhT0A2XLifvPjknCkNLekSEe4wXyOcSbTCrvyDhH5ZFdFE2Jb0ih5eT0cWLdnyG6IaX8PlV5BjgLzTDbgfdtBLKc7EQ2pIJZTnZw34bYkFKQyWCWk52ohlRAy8mOiyHlWGkLajnZgXHExQ9l0tGQ8nzKia0eG0CZDGRIBbac7Djs23CqtOlaTiCPrKPkeLuqIRXccrJTw5CiMulgSHGvyGsGWk5CeSyocLFnUDSklC0n2g1sNTUzEQypKJaTHYijd0NK9xv95CmfBXnCiTLZqNLm+xAwm/zbaL5vo5khFXhHhgzYtyE/SNzEkNI+BEyHc2VNzYy8HAH7NupX2hq+d5ZDXhqqwsGQqi2Tng8B15fHAihRbsplsqYhpWw5yc8vVBPOkPJ8CNhuOdkJZkhFtpy0Ps2t0gb9QNdyYv93Ip6H2bcR3XKygzLpwZDSPgQs3mAgRby9wWHfhuN7ZylNLCc78o0ujQ2pJCwnO/4NKWXLSZzt18C7IZWI5WQHt0HqGlK6X/Da2HKyA+mXriGlbDmJNyfXBBJxdt9Gg4PECVlOdhz2bVQaUglZTnYExyXG1DaktA8BO1lOdvwZUp53ZNSznOygTHIfjjJpNaQU3zub42o52ZEfJK5nSOnuyHC2nOzIDSmUSUulzbflpCSPBXLpqXGQWPm9sxqWkx1xlGscJH5GZ0XdU05NLCc7T8XjTWxIJWk52dE3pJK0nOzId0UKDSnv7511+TQO7pUsiMiQStZysoJ5+XvmSpEhBZbTUiKWkx2XfRtgSPm2nKynnFyQl7Kr920kbDnZkZ+jqTSkfFtO7Gv03JEfJK6qtEE/cKqpgTyyL1RUQO0gceKWkx0lQ8r3e2f9yOMEcHcaGVJ7dDCkZjnZUTGkfL939oLvd+g67NuYGFLKh4DDyWOBfJ2CMjk2pFAedS0nVrL0kEsyJ5O68lj7ELAGzgeJcfXoJI9gGCvX1MzgzrB679ug/cDNcrpFO4Ka5WQHxiBXWEBDKsuYLkKO4PQwb+lE/d7p48TgV8ZwV1KZzAWCJotulhPUPhUtJzu0iLPJLltBIHBvjpPlBDOUpuVkh8ok+21iYEh1D2iS4GY5tW6RXqmyI0MGKexaNsQQmexeJvOi2yknKIKv+V00lCkLhCVF2yl3hWxmpKPBjfI3Pmb6OB+O8l8efFtmAXnAnNmFnyQI8Rj8prkhRzYc0HZyYfZLYONS+qZ2exAOcI+SE0P6vZfRmH47dxX9dTTf3ILwNZUoDKpbPyZfQukGgc6MsZj5svqq0ZCvoE7meKg1Gkz+m1MQPibRFQa/xB1hVGaEs/FuUfiVQl+QzwhFwfmK6oD4nEBXkOvj1IVa1IzC8Gf0XEGeKPVn7JdrqlH4/iXuiGgWg1Zrj1bdnaLw+UXEITEY/BCGoNsljuzWYk+xNwyXj47i9IaBOEHo9g3nobZ2e72OHh9/Ha2dDc3ayu+ujP7yXabmtb+9oMfLhfN/zgXlw5/zQg4PSqbY/2lTVEJ6Q1RoAAAAAElFTkSuQmCC",
    },
    {
      companyName: "miro",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Mir_company_logo_with_text.tiff/lossless-page1-220px-Mir_company_logo_with_text.tiff.png",
    },
    {
      companyName: "lottiefiles",
      companyLogo:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXoAAACFCAMAAABizcPaAAAArlBMVEX///8AAAAA3bP6+vre3t7i+/ajo6Pt7e0XFxeurq4A37eZmZnx8fE2NjYMDAzZ2dlFRUWQkJC28+bIyMhwcHA8PDxK5cVQUFB158t9fX3m5ubR0dFjY2OEhIQSEhLv7++1tbV1dXUrKytpaWldXV0kJCSVlZX0/vxBQUE3NzfDw8McHBypqalNTU3Y+vSJiYmM7tlk6MvI9+024r6o9OXQ9+6f8d+E6tHr/fqx8+P6lEazAAAKBklEQVR4nO2c6WKCPBZAsaC4oIBrBWxR0FrUunXxe/8XG5YEEgi73zjt3POrssR4CJebhXIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/k7x9XIZ5XD4eXcu/x9vwdJ5eu3lcp8+ny6Pr+rf4vHafitKdgvy78XUt7D1g+vboKv8N3v4p3uIx169H1/pP8F3evOsegk59LlXMuzGn+eiK/3reqpl/ejpDvK/JuaL5p6d/Hl31X07FcOPRhWZfi+fK5p+ePh9d+V/NR9mMnmT66Nr/aiqk9BFdGNCpwamG+afuN1mUJgTw/05N+aB0Wcs/9FVg450qELUU0d+v/06Ns3krEeqv0/Pz6YcKUCeyLKXx4jJYjcpXQ9N95PCq8XKwRYiOESYNHyu/uJ5fkwSNOc/xq6AU5dU/LmBfvsb1uRVNLa8/l6/mzU1phqT7H7KsfvA7Xiqo760mLu/bsEWL9ru3pa9GxwhKUP64QHENNp56dAFnkntca+D/3e6Ur3F9mtNC4runZphI/hDbn8mykPp2BfUL5CZs5BoyNI+O+f9Uf74RpwxB/V0oor5LCeY+H6V+G2wqFOvT1aNaHn6FeupZyt3IM/6b6uW5NXaxevnFpalfuuqXQSnz36D+ORouaF6Gn9Rzuax6vqMu5vPFsRXLEIuol8QAiT5VMDdqqyNQ27B6e6NSmG4GhUoRvWSKrV5yWmpv77ByZNHcePVXW46Y/iMLkq9+iuP87fl6vXbpHlg59eJi0kZS+pZO7jmizVGGs02oZ5Y43668Itsr2yQ2Y/UtjqeJnc5Sb84ma3fbYL2dxw/XrfddUPBg118KXD1y1YczIp+svWXUC2P67p8Ex/Gj/b5jo22bzj6gh9LvWbDBa65CJ8BJKbFthqoi9Ql4VEqH2eql/QsVoMibU4rVv2HLJWXT5KpH/dU3dq+3hHpz14jTkli/iImn/j34Ez9meXMdO2iOTWWpx10qVqyXl7ESJ2Z4onZI1qpWLzhP/TU4LMV8CfV7ltCFGzH5+M9lseYTySXPeJbaYr76jORSnySLxB1d0U7uW9YaMslTjya/0wbZCqtnmnfdS5XVt1jHGXwN9fqWVaST/nUVUrni6lF200wb3iyqnhFtAjZV1ZvsA4/V1WuMdu0SDG6wdlr1spxs9V3U6FMPKqhem+HqvijWcTOeRVFa5ovE+nZcvYxCdmOycQVo+1kgsRGM3WH1G1GLELPVhwFsYLllSKMl/gY/yRqhx+9gOeJ4uTO33b1mLfM56n+CRn9JvyuKqQ/DzazjP5l4x8BbFK5lGwY6teH+GWCjLHRl+R/HcfU4GzVQiidhcX5GGFokhy0PfKZ6GX1jG0f3kUJcTQeVGHal9c2mZmqfqR4llm/pxxRTL2KzsyhvD9u6zmuiOEcfRrjDI6N0Zhl0pLwLRqrXEgXiYLzWuZTebD9bvYoOi3J8GW1ReYb6+mSqR2K/c4/IUY9/Q4NIk8PgufA+JXqzjC4VqR55HkQ5PsejM3p8ivr3bPUooiyIrAU9T/purUYooA0s4ivrkaW+28w9pJh63Kapp56JfozifUiqzx65RDn2nBxUQKJmYiX1erB5R1ZeROHevZFkJSxnpxz1e0zEZXlFw2YZjb6gevQLXqiBG5wor7w+YVn1qIl2vJEdTZDNjbUdYDVaJfXoPjJEjndLFPT9fIafsw1vwE6lC7P02FDSXdWjVTaZSxaKqUfVndFjZuheWDsV1Ad/DRZmb27jBwlGTlG/ylS/DDbbnf3RUGKpsNdbEOKd2fGoZtPPUI+GELIafTn1Ft3vRkmKH2hLqn9lqcU4kfr+jGCZqZ6d1AdseeLrQ9pqvYafrh6NWN4yF4uUU09nY+gWftmXVy9lqTcj9T080BwNNqeptzJKnPgXLUzDQoiJ43uqx72p7GnzYupRZD7QAQfprhFwSF52q/fZsjXyBVfozS4TJQ7a675iHM1ocFiYx4JbrWwnVf0JRfpM8wXV47ERapBVRL2qSo9Z4ue3+4q9XPRM8rlXQT35eFhPZuP5ce8kV/zwvaU9GUQHFnKcQpp6vHg+Z61IMfW460lN7TnoWaZ4d3NZ9XhgYtzamyM5EXMrqMd9j4na6jh6xjIrSTfDMYZGnemSFPVXZH6YsyywXJdqQPwi3OgbS+9TWfVhMKe/COccVYbP0Cn92Bg8K42RdNwXrzOpy1bfvWXtLa1exKNlh2gbvhOCeIk/hepft8SFCSDVi4yL6SoxkIoq6nGKc6QO3yu4QgvymuBx0zoPWobc7hUvQXj7YdjOV+9w8QnRDva8c/zgwAvh82rin4pHw01/r3sGjzwf/Ivhn0Sqj0aaI/eiJzK4dlXUh6MdrbChS/osvO9aXr6E94SjnHVWDNLqu9Pz889nuN6JOR2bq34wptcBHEfEoHFDMUe6Q2Rywew4Hp1a6aKgL7wwgs84appsWkJMPafjZ117L2s8557V24VGK6mXwkqNdeGVkzTZ8euwM73T/Pi46o1kb3XsCMfHWpMllPru8ONGvCiSF+hT1Cdwb2EnPo0a7gsakoA/r6zDwL8TwpHNg4GGxin1fPjrGyt7oY5neDpbJQeNS02VjMKH58th3FuGA9mKd91x25goikJMZtXp0FLqqSXbhd70KaTeC4gpE4RLlJyI1Kzoi0PEqMB/YpYq0blEDEZV1ceHachKSuweV60+FaWeejWq0Mu0hdWzh1WsMC2kL40XX+kjtcTcbDhPRWNoldWnTFV6EUdn7lFqjSRQ6olFrV/FViAXV8+IOQMimSCeBi4TOd7sreRyV4nR7ldBtllxRQKnMuKi/5xhrUeI985Lqyf7THi1/O2r6PvjJdRz+nhAbbappHhEnu2vjqKGTGzGSmNejX3jeomWtFVVzzlxxTNUhNSaxfYMFvXMczfqrZKfy8dl+Hk6F361jXq1IW3VAW7ckmNFa7uMfazmehhOdz1/KkJqhWbtjhdw0EeDOGdDyLf2eBiX32SoR3Fq66lP5oiaaUQlblVHIPZQl8VgrsksQyx1T66qzIZahCzIbCLHr4JzNPore24KyTnlV101bNuYO/hlLF4zx7a7qaf7B/NCvDjvEF21t+v2yqBKFNE3syauUSnBu1ToOLK39Cqb40O/vVNUXaPtioKjWofVSrGOrPqXJnM4Po9ulRdnE4tO68JYx3qHItN33etLCiTv6VzhP1TUoODLVGzgleVa5I7TZAD/n6IWHzX+PcWj6/7bqf6+OPwfqLpUjfY/8D9Z6lLxSUu9TAtUo+CATcw8JJb3oEK7f4Zocye+y/1Houvw0RX+QzRP06JZZvf8DU3+rjSHp/N5msf5+fsCz9f7c7s187iBdwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI5z/xzOjkodcL3QAAAABJRU5ErkJggg==",
    },
    {
      companyName: "wise",
      companyLogo:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVwAAACRCAMAAAC4yfDAAAAA2FBMVEX///8WMwAAIACxuqoSMQAAKQAAJwAAKgAPLwAgORMAGwAAJAAAIwAQLwAAIgDR1NA+Vi1PXUkILAAAHgAAGQD5+vjn6+UvRCUALAAAGgDe4tsAEAAAFwC+xbnl6OPCxsHV2tHw8u8bOQCJlYGgq5jO1MlTZEq3v7J1gW8AAACapJNebFhFWDsvRyE5Ty5xfWwACgB3hm5RZkM9UTRpeF9IWj+psKYmQRVabU6iqp6osqBrfF+SnI2EkHycpJdDWjQyTCBCUzsrSBSHj4SEknwhQQIfOg83TCxiMWqQAAAP3UlEQVR4nO1ca1fqOBemkF60CE4RRA6FFgQ8KDgKgjh4OccZ/f//aIDedvZOSgWcd71r5Vnnw5E0SbOzs+9pLqegoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKBwWFRbXq+9Rs/zGtXM3fykW6N26Hd6KuwBNxijRho8ugjY3CPNHhlCMvLAF62icXl1fTPq1O28Xdc6o/H11SWdQ9xtMmfrbiabj/u3Q/ri+2D6I78zftwFY/TqFdTwF5ln+WfS3HwgFOo3+RGa95ufn36iKY9HDdzVb9/Vm0XdsRjT1mCMWY5evDi7n5FnAaq9Z9TNcky7Wb9rC7dvJ3jzYOxd8MMLxxihMRxK3A545OQNv3/j0+JHOB5sfu8aaEqnj7s+9Q1dvASnOLryZOu+vLYMUTemm9fu7uREGJa+TNQQ1mso2lo3iDTOPZ7lqQIXYLZQ80znB4jIf4V+18wrvmN7XHHkb8j05qOIe/1uveTImIo5Z69pLP8VVOu7sm7xJXrXPlqg9YonueaeuPBQMyai8S7qtm7ocv2W9RTSbqCPFmTJ7kM+fc3maHgg6g7MLe8nARvFJMI0OHnDy2HcakoFvtlHG8w6wckkR0KzL0G3xsjezhjGI3oX/+54245oJ6UpPly7gbJHNjjX8RC3aH9YB81xx8tO42++eVDh+1uTQOAQYa6VgDxsjLKwBc/rKwOkj+W4EPb4MIaZt5vUzT8ltEOnmln8DD4inoO46RFtrx0SpExEViWRhq23TEyR59WTO8JiXAJ94h2EutNMe4nA7ERvY6WOidu1+XZrzDXXztHpz4ckbOfxrM24k/+Y7a1LZTjVwMKCRgp9kt0VSUFjdJJ1RjD3XTLAZZFvYw5nMNUmaEXsnHvvAmJB5zFsHqJNgfLmORtt2T9Q8z+xL6zUmB6EukP4osyyHME/B+25CY7bAHEYcziBRVQm+4ArJraCPgtb/sIdExuvl0GXrWFB2emaX7KMjOUhiFsdJYRjR3/I8AFf+gG8dO+YfyvmcMTDltrKG4KC0P/NL9k6j3qf4jOcHJeHjFrYuU4OkTfKLBOC17S9Q1B3kJzrk7HsIf8cEMF4Bi21JnotE3r23gV5bfMJtLtoa8xp1GIRYyEyWgcCH2DlwK7AG32a/p68/4NYl226kanWcPqHEAzVaXIAizIDegEP6ZkHm35g4kHOnFKLyXgB7fjwV6LOVTyslg+1UxUbf2tvTBud//r1ea4ZkPB6crTvsAQPuplHn5Nfk0/NoGzNrIN4wl6yc9ZIbD/70B623rg2bDKZAzD0EWUKHXix3IFYr6gTsQtheca8oKVFGM2qP7vrmKHfcmfTTjFuTs6ISOAyU7+aeSvBUfXdxZj6bYdhXWjmQzsAoAEpaL9wbUhqajpwwV4Eah1KwgEiVGL1F7AlZkUxMdrSAYKo6i/nYTAn4T3/hkppy3n0Eur5lxp5pOLtRk4eNSDso2gXD2issjn/yD16Kz2Rqf5cYP1Yp4k6fOeJzxIyYfM4iYlhScKOUPi29hxEHZgWKccFkuwrmOMB38slGk+f5g6Bl0Tam0IDD05s3vJP4MXqidwmTBZQMBY9/phfkPNHPDSNiUXToj6aSQ/byhVja6MvmmZORKrRJ/LP1dARtD4P4gVXwbExCrTdhWoijx7ALhpQI5gOAY5jv6mMOMpO9oXGxMJhfSzGS9D6COHfrahrnYZ/UeFk0pB9LrfEoQBnQB/aAW4yrjWnze+QjZqItRfIRUuIS3ghQD5+ZxyXaMas4j+QQxoSvvGBiSvghlx1WGFRFINERVfy2xP08d/QnJzJuTv8t+SNS13c2oIuso4zDW0UmTEi65J4X9EDcVwM0QnEdGhMLDJCPExcXUyCGYtCQC4RTnkxSy6QgLNOD5L1eQZksEiqyoXnxW6j1jYWCxFxW2LGTWjoIluhmKy51yHE9YIWwrnWWGw+Ln6GLI3jbpqJw7zRpEjiMPMQxOVUc+kKq7RX8HY0kVVGdIg1z50kvBLbychWsCYJldokbOOEo9aI6ey8ecJVDQMmqWITlnXEz+eqWBYdY0baAQXIQcYrpp4PLXCdCA2c5nRCe6Mq8+aZFnSsoVyDeZsMOsPKJY6JEYW2mnEk0GmrFwjeo0ASnVITa4p4vHgpezIzXJhBde6J/cHFzWySv2tgeyp0EhacxAVTMCsYo4xk4QWwV7Gq05w4NYcDwCtY+d/imoY1iOQXasAN/sYSTuxSfQENyGFWkRCPSwUJbIkaOkxOf7M9nMfs/AXZ23FFS2F1MCiRk4keJU2b9zIeFmLy1oitcCElxSUSRnIezwh/ztGOFquUodAo0XwqzsNZNxvRWQYHm9U96MeFPr8mc31X+Aef/cQEvhRnphzD7Iqy4h5RjdrrqQRv6FHnYT/aVqfg1LAfgkgQ5/p2BO+PolQngfZ+5LRgFZ7zwB/o8ceVMZiTIf5qolsakjoQjdmdZ4+8XZvuhSUDiQj92o+4MIfGHMqXfNTLJJZEjrfj1qPM1xvQgFqwWOA0VBAX6/LdnGswdAMHiTU93lWZ+byeWtfvMHkzpoSEsCZ70fYFegBFYgms0INPmCJd0MXRlzUdlvBA1HkpsVF52G/iQsnE7me/EzPNlRbMrJ4zrCUve4UiOiOsz30M3RnkL1MoviGfsA9RVAelKDeB1xY0IeyVGGgA0bcx+8vY9YXrINlJ6wYYMVNR5DueXp9zHPB7hwRsPOs+xO1B+9rqN2oA4bAclYjruwGOfZll3k7dyAlYQLPhbcTvDlcFRSwxLljXGqVy44l9Bx4WBeaywtojw84n7djROcBRKCIGkC35OoB4i5D2WedjIL9snH/OMls/gZR4kVOlNCb2Dpvdj9RsIzOmCcf9uZ2GUuyh0PwxvwQGYB17wUPQhHJuxNXHSPsclzmZyfTNUDCylh/kvDN+GVyAQBAT47MfA0HSC8J4jFmO5OK+gN1NMT+t2CZKIPmQBro4l49ziXk3dwWss7DeYAhtsW5uyU/Oh7Yan1hQOkiTup/pRoAR64+9iCuJ8GxHqlrQQ6NsCKQC+/DEI/FMqJVmUHtFB74AiOs8Ys/D5qRCD0e+GMPOTePaTmVeIzQ+aBb5C8BFg5mxLKaMGpWI8q7vjWQoJD7tBVRWURitB5j55LTB90GlkW4dv88HiXhUCx09hbwn89r+xBUlObLgMrXuOSoRLUMXNS+bChXHmH/DXmZYn1TlrNMFf2xs3sKmMbEjwbS1l1FJvgg7DLoQhcayo7lblXmPpdE2zpMtoeuryWqCkZ3OYJCGHUVKEPIq4xMNrO5xA5LrEKRcPSTvU8eUWWXWyBcSlx1lR2cnM9fbYstEtRmQILrI9d2AlOiC/yc8yaXgUQj4mhu6SnMHQgN7/eigr0sctnrAIHifSofJOsqBjTCMqCimB1UVVtgJiD8FiGjFJ4s4BmA+3tCqkiI8XCIO11J+FF/pCU1jHF+z9w+Ap8J/+/M4DWdRRTas9EpxBXEVKSRbYmIVpEXsTOPVFb0Hk0+t22pcaYIi/lCT4pqVlH06CPzyNgR0bMHC5ZSoPE4pALKBelFcpADIgG5XtUhM7CLi/5b4cmT5/pgwL3vb6Ah8YGAy6X+JGTzueU/6nIctp4Rs/eSpBo1ahyghvnRRsh4U6fTmEgVeIFqE1TeP4mN1Mj7URbP9APN11qk8hiEI9oc4A9qjJa6/WV+uQkYsvgkASsQL+X5ODFqdEGSscPRtE1cSo9w9+PVqKbiyZkMURw/RGEvCes4N2BEf51YjEK+aZifjQMxQtx8lu7zEdkFgpZI9lfq0tVEpP/UOUje6HdAIYB8pN8FxjjzZEc4KeBeHA/g6/jVITCwpEX/XRYV3G7RxDcrZhri0VvpYwp/rAmmd3Wa58r43qn8AkoFbfRS+5KogKhN8EdtiJJfCTRxsUnRsqmvut6dCu4VUQIWXri7xnkpKQ4PIEjONU/dwd9dl4KInUtd3DUEhfUATnsfwragQNraNahMsZeqRiR2k8fW+SCf1UHFKqNByDeJLO6LFFGLFYdk3s+8WDlCGsXrqbO9CnmQ27y/3hLVj9Bo7LtladYsERyMgoPkhKFJYIA49iYqsX/GmMoOazU8OPKd6Z3iY+78SVN9gMiG99KQrJC4+foJCJI24vjlyE3sdDog41TOjfSMfRiAFevH1AOrjnHzg291XyMljxc7yG002aGxuu9kyFKmq6Pp5AuFlzShqlmBGwjbxpcukXNVxxgPAXFX3k2SGIm1KLnGuL0RMwbdw/IXgUrD1nUEIzvX9lS7iSa3bZvnkNowoy83Oyflb0tRv1AQMGGZVOs8Lt+e1arXeol8iPkRihAwp6djKLJj1vEbLcwvvb3nBrh/oMo8QLVjvti0i74oiNxUS6MF1bmvQfH6V3F1LvuzC379guqF9jM7Pzz90wW2dz2REUb0lM/WPo/Pzo45piA5UmPn7HszgMppbJvIExLV+k50XhW6OicDxX4klFu8tCZeFUW0BdfLD9InjzsKmOE30HeDYJ765IYMvSBnxDsQGgtAN/Z5QzidFeEnNp/AiqRDWCNjYKRVQEtiHubUuRgtqTzvF9Q1A0y3WJ1W2gjp+weVw/PWLyI9doUqapDC5d67Nv1bUpE++04/gsr7oVp8AlGoi461GQjfUoqA1JquxopVm/66J+cBzXk/7yqV180BfCpEAkiFDCTC+ZAQisABVErpxHujpeyIxsVh0FNKqAbhxyV0ol2WnrimLax4GvUxZ3wQ43C8JPZHQDXF9cwKbwnmMY2IZy0EtwYEY6Fkr8ozJ98ZuIBWYsf15+hUh4T0Y7KFqtiBARSv248zoczaxYGkin8ftZJK7zLj+3riNv720kQfOhdMLVRsMSGhVoJNJnVhyS771WsxwuPUjsT/Z6wg/MsjDLF5+c9DGBVlfVs9wSHAVh0SS4DIlXeBh+vjTjpyDvNj6rTZmXsvyCf7zto/oWfb025NA8GRyH7SRAV1RZbZ492v8tytE5hr9/gXjDnmjm08rErNKpUIK57Vfm/LvCDGzMh98eyKiBt2WTJ8pKqPqJJl7w4dQ9CvBI+Q2NkOa31/e6OLzvfJob562UMe9YkVhZ6c0vz3cJ0jlWMAP2v70MvTwivBDtxXZ/c/cPfep3J+ixczQ13Tzx+f46NTaz51m3jC579/q9oX92M5wyspLrWknfTV24phGpXk/+MI3o/dAj36GeQv8AddFKqX5kYVD0+9AC/nJL3RvryejTt3Il3RtPrm+GmY3oLzhVX8y11Z9KxWjM+7fdt3/KC/5/4P1N8d74TfHv2o++Y2wb7v35b4KCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/Jf4FyRJTSL04EdYAAAAASUVORK5CYII=",
    },
    {
      companyName: "dribbble",
      companyLogo:
        "data:image/png;base64,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",
    },
    {
      companyName: "kinsta",
      companyLogo:
        "data:image/png;base64,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",
    },
    {
      companyName: "angellist",
      companyLogo:
        "data:image/png;base64,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",
    },
    {
      companyName: "behance",
      companyLogo:
        "data:image/png;base64,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",
    },
  ];
  return (
    <div className={styles.LogoCloud_Container}>
      {logos.map((logo, index) => (
        <div key={index} className={styles.logoItem}>
          <img
            src={logo.companyLogo}
            alt={logo.companyName}
            className={styles.logoImage}
          />
          {logo.companyName === "nuxt" && (
            <span className={styles.companyName}>Nuxt</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default LogoCloud;
