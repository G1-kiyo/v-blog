---
title: "信任模型"
id: "02"
description: "概要：为了对Defi这个概念有更准确的理解，我进行了很多的思考，也查阅了很多资料，目前我的定义是这样的：
	       		Defi是自己掌握私钥，以数字货币为主体的金融业务。
	       		这是我目前能够想到的最清晰的定义。
	       		这个定义包含三个层面的意思：第一是自己掌握私钥，第二是以数字货币为主体，第三是金融业务。"
date: "2020-10-10"
path: "/trust_model"
---











Vitalik Buterin's website
About
Trust Models
信任模型
Aug 20, 2020
One of the most valuable properties of many blockchain applications is trustlessness: the ability of the application to continue operating in an expected way without needing to rely on a specific actor to behave in a specific way even when their interests might change and push them to act in some different unexpected way in the future. Blockchain applications are never fully trustless, but some applications are much closer to being trustless than others. If we want to make practical moves toward trust minimization, we want to have the ability to compare different degrees of trust.
许多区块链应用的最宝贵的属性之一就是去信任化的能力：不需要依靠特定的参与者来表现出特定行为也仍可以按照预期的方式运行，就算是以后应用的方向改变了，使得它们要以非预期的不同方式运行时也同样如此。区块链应用从来都不是完全去信任化的，但有些应用的确比其他东西比起来还要更接近去信任化。如果我们想要有效实现信任最小化，我们就需要对不同程度的信任类型进行比较。
First, my simple one-sentence definition of trust: trust is the use of any assumptions about the behavior of other people. If before the pandemic you would walk down the street without making sure to keep two meters' distance from strangers so that they could not suddenly take out a knife and stab you, that's a kind of trust: both trust that people are very rarely completely deranged, and trust that the people managing the legal system continue to provide strong incentives against that kind of behavior. When you run a piece of code written by someone else, you trust that they wrote the code honestly (whether due to their own sense of decency or due to an economic interest in maintaining their reputations), or at least that there exist enough people checking the code that a bug would be found. Not growing your own food is another kind of trust: trust that enough people will realize that it's in their interests to grow food so they can sell it to you. You can trust different sizes of groups of people, and there are different kinds of trust.
首先，我简单用一句话来定义信任这个词，即对其他人的行为预测。比如在新冠疫情发生之前，你走在马路上，没有和其他陌生人保持两米的距离以防他们突然用刀捅你——那就是一种信任：都相信极少有人会做出这么疯狂的举动，也相信管理法律体系的人会继续提供强有力的激励措施防止此类行为的发生。当你在运行一段别人写的代码时，你会相信他们写的这段代码之中没有掺杂虚假成分（不管写代码的人是出于自身的正直感还是为了维持名誉所带来的经济利益），或者至少有足够多的人在检查代码，那么就有可能会发现其中的漏洞。你不去种植你要吃的食物其实也是另一种信任：你相信有足够多的人会意识到种植食物会给他们带来收益，这样他们就可以将那些食物卖给你。你可以选择信任不同规模的人群，同样世界上也存在着各种各样的信任。
For the purposes of analyzing blockchain protocols, I tend to break down trust into four dimensions:
为了帮助分析区块链协议，我倾向于将信任分成四个维度进行讨论：
	• How many people do you need to behave as you expect?
	• 你需要多少人能够按照你的预期来表现？
	• Out of how many?
	这些人又占区块链参与者总人数多少呢？

	• What kinds of motivations are needed for those people to behave? Do they need to be altruistic, or just profit seeking? Do they need to be uncoordinated?
	• 这些人做出某些行为的动机是什么？是利他又或者只是为了追寻利益？还是需要抵制合作？
	• How badly will the system fail if the assumptions are violated?
	如果这些假设都被推翻了的话那系统崩溃会严重到什么程度？
For now, let us focus on the first two. We can draw a graph:
现在，让我们聚焦在前两个问题上。我们可以画一个图表：




The more green, the better. Let us explore the categories in more detail:
图表上越绿的地方，代表系统运行的越好。我们再对不同类型进行详细的分析：
	• 1 of 1: there is exactly one actor, and the system works if (and only if) that one actor does what you expect them to. This is the traditional "centralized" model, and it is what we are trying to do better than.
	• 1对1：存在确切的一名参与者，如果（并只有）该参与者能够按照你的预期执行那么这个系统就可以运作。这就是传统的“中心化”模型，也是我们一直努力想要超越的对象。
	• N of N: the "dystopian" world. You rely on a whole bunch of actors, all of whom need to act as expected for everything to work, with no backups if any of them fail.
	• N对N：“反乌托邦”世界。你要依赖大量的参与者，他们需按照预期执行才能让一切事务正常运作，如果其中任意一个离线了，备份就没了。
	• N/2 of N: this is how blockchains work - they work if the majority of the miners (or PoS validators) are honest. Notice that N/2 of N becomes significantly more valuable the larger the N gets; a blockchain with a few miners/validators dominating the network is much less interesting than a blockchain with its miners/validators widely distributed. That said, we want to improve on even this level of security, hence the concern around surviving 51% attacks.
	• N/2对N：这是区块链运作的方式，即如果大部分的矿工（或者PoS验证者）都是诚实的，那么区块链就能正常运行。可以注意到当N越大，N/2对N这一原则就越重要；有矿工或验证者广泛分布的区块链会比只有少量在控制网络的区块链更加有意义。也就是说，尽管目前的安全级别还算是比较高的，但仍需要改进，所以才会有对于51%算力攻击的担忧。
	• 1 of N: there are many actors, and the system works as long as at least one of them does what you expect them to. Any system based on fraud proofs falls into this category, as do trusted setups though in that case the N is often smaller. Note that you do want the N to be as large as possible!
	• 1对N：有许多的参与者，但只要有至少一个是按预期来执行的，系统就可以运作。任意一个建立在欺诈证明基础上的系统都是属于这一类，同样受信任的初始装置（trusted setups）也是，只不过在那种情况下N通常会更小。注意你会更希望N越大越好！
	• Few of N: there are many actors, and the system works as long as at least some small fixed number of them do what you expect them do. Data availability checks fall into this category.
	• 少对N：有许多参与者，只要有至少一小部分固定数量的人是按照预期执行的，那么系统就能够运作。数据可用性检查就是属于这一类。
	• 0 of N: the systems works as expected without any dependence whatsoever on external actors. Validating a block by checking it yourself falls into this category.
	• 0对N：这一类系统不需要依赖任何一个内部参与者同样能够按预期运作。通过自检验证区块就是这样。
While all buckets other than "0 of N" can be considered "trust", they are very different from each other! Trusting that one particular person (or organization) will work as expected is very different from trusting that some single person anywhere will do what you expect them to. "1 of N" is arguably much closer to "0 of N" than it is to "N/2 of N" or "1 of 1". A 1-of-N model might perhaps feel like a 1-of-1 model because it feels like you're going through a single actor, but the reality of the two is very different: in a 1-of-N system, if the actor you're working with at the moment disappears or turns evil, you can just switch to another one, whereas in a 1-of-1 system you're screwed.
虽然除了”0对N“以外，其他的种类都可以被看作是”信任“，但实际上它们是各不相同的！相信某个特定的人（或组织）会按预期执行，和相信某处某个人会按照你的想法去做是非常不同的。比起”N/2对N“或”1对1“，”1对N“会更接近于”0对N“的概念。可能你会觉得“1对N“的模型更像是1对1，那是因为你感觉在系统运行时都只是需要经过一名参与者，但事实上两者并不一样：在1对N系统里，如果某个参与者在你工作的时候消失或转恶了，你还可以将目标转向系统内另外一名参与者，但同样的情况放在1对1系统里，你就完蛋了。
Particularly, note that even the correctness of the software you're running typically depends on a "few of N" trust model to ensure that if there's bugs in the code someone will catch them. With that fact in mind, trying really hard to go from 1 of N to 0 of N on some other aspect of an application is often like making a reinforced steel door for your house when the windows are open.
特别注意，验证正在运行的软件的正确度一般依靠“少对N”的信任模型，这样才能确保如果代码里出现漏洞，有人可以发现。有了这个想法，在应用的某些其他方面很努力地从1对N转向0对N，就好像是在为一个窗户大开的房子安装钢筋门一样。
Another important distinction is: how does the system fail if your trust assumption is violated? In blockchains, two most common types of failure are liveness failure and safety failure. A liveness failure is an event in which you are temporarily unable to do something you want to do (eg. withdraw coins, get a transaction included in a block, read information from the blockchain). A safety failure is an event in which something actively happens that the system was meant to prevent (eg. an invalid block gets included in a blockchain).
另一个重要的特点就是：如果你的信任假设被推翻了，系统会如何走向崩溃？在区块链当中，两个最常见的失败类型就是活性失败和安全性失败。活性失败就是指你暂时不能做你想要做的事情（比如，取款、获取区块内的交易、从区块链当中读取信息）。而安全性失败就是指系统想要阻止的事情正积极活跃地发生（比如，一个无效的区块被放进了区块链当中）
Here are a few examples of trust models of a few blockchain layer 2 protocols. I use "small N" to refer to the set of participants of the layer 2 system itself, and "big N" to refer to the participants of the blockchain; the assumption is always that the layer 2 protocol has a smaller community than the blockchain itself. I also limit my use of the word "liveness failure" to cases where coins are stuck for a significant amount of time; no longer being able to use the system but being able to near-instantly withdraw does not count as a liveness failure.
这里有对于一些区块链二层协议信任模型的几个例子。我会用“小N”来指代二层系统本身的参与者，用“大N”指代区块链的参与者；并默认二层协议下的社区规模比区块链本身的更小。当遇到货币很长时间取不出的情况，我也很少使用“活性失败”这个词来形容它，因为不再能够使用这一系统但几乎能够立马取款的情况并不能算作活性失败。
	• Channels (incl state channels, lightning network): 1 of 1 trust for liveness (your counterparty can temporarily freeze your funds, though the harms of this can be mitigated if you split coins between multiple counterparties), N/2 of big-N trust for safety (a blockchain 51% attack can steal your coins)
	• 通道（包括状态通道、闪电网络）：针对活性的1对1信任（你的合约方可以暂时冻结你的资金，但是你可以将货币拆分给多个合约方来降低以上带给你的损害），针对安全性的N/2对大N信任（一个区块链51%的攻击可以窃取你的货币）
	• Plasma (assuming centralized operator): 1 of 1 trust for liveness (the operator can temporarily freeze your funds), N/2 of big-N trust for safety (blockchain 51% attack)
	• Plasma（假定是是中心化的运营者）：针对活性的1对1信任（运营者可以暂时冻结你的资金），针对安全性的N/2 对大N信任（区块链51%的攻击）
	• Plasma (assuming semi-decentralized operator, eg. DPOS): N/2 of small-N trust for liveness, N/2 of big-N trust for safety
	• Plasma（假定是半去中心化运营者，例如DPOS）：针对活性的N/2对小N信任，针对安全性的N/2对大N信任
	• Optimistic rollup: 1 of 1 or N/2 of small-N trust for liveness (depends on operator type), N/2 of big-N trust for safety
	• Optimitic rollup：针对活性的1对1或N/2对小N的信任（依运营者类型而定），针对安全性的N/2对大N信任
	• ZK rollup: 1 of small-N trust for liveness (if the operator fails to include your transaction, you can withdraw, and if the operator fails to include your withdrawal immediately they cannot produce more batches and you can self-withdraw with the help of any full node of the rollup system); no safety failure risks
	• ZK rollup：针对活性的1对小N信任（如果矿工不能够写入你的交易，你就可以选择取款；如果矿工不能马上写入你的取款信息，他们就不可以对交易进行批量打包，你就可以借助rollup系统内的任意完整节点下的帮助来自行取款）；不存在安全性失败的风险。
	• ZK rollup (with light-withdrawal enhancement): no liveness failure risks, no safety failure risks
	• ZK rollup（在轻取款方面有改进）：没有活性失败和安全性失败风险
Finally, there is the question of incentives: does the actor you're trusting need to be very altruistic to act as expected, only slightly altruistic, or is being rational enough? Searching for fraud proofs is "by default" slightly altruistic, though just how altruistic it is depends on the complexity of the computation (see the verifier's dilemma), and there are ways to modify the game to make it rational.
最后，还有个关于激励的问题：你所信任的执行者需要按照预期非常利他地执行吗，或者只需要略微无私，还是足够理性？检索欺诈证明“默认”是轻微利他，只不过利他的程度还是要依计算的复杂性来定（详情请看验证者困境），而且能让这一游戏改进得更加理性化的方法还是有很多的。
Assisting others with withdrawing from a ZK rollup is rational if we add a way to micro-pay for the service, so there is really little cause for concern that you won't be able to exit from a rollup with any significant use. Meanwhile, the greater risks of the other systems can be alleviated if we agree as a community to not accept 51% attack chains that revert too far in history or censor blocks for too long.
如果我们能够给ZK rollup取款服务添加一条微支付的通道，那么帮助其他人实现这一服务的行为也能算是合理的，所以你没有必要担心不能够从带有任意重要用途的rollup中退出。同时，如果我们以社区的身份拒绝接受51%攻击的链条，即历史回滚太远或删减太多区块的链条，那么其它系统带来的更大风险将会降低。
Conclusion: when someone says that a system "depends on trust", ask them in more detail what they mean! Do they mean 1 of 1, or 1 of N, or N/2 of N? Are they demanding these participants be altruistic or just rational? If altruistic, is it a tiny expense or a huge expense? And what if the assumption is violated - do you just need to wait a few hours or days, or do you have assets that are stuck forever? Depending on the answers, your own answer to whether or not you want to use that system might be very different.
总结：当有人说某个系统是“信任依赖”的，就再具体地问他们到底指的是什么！他们指的是1对1、1对N还是N/2对N？他们需要参与者利他还是理性呢？如果是利他，那指的是小小的牺牲还是指要付出巨大的代价呢？而且要是假设被推翻了，你是只需要等待几个小时或几天就能取出货币？还是你的资产将被永久滞留呢？针对以上问题的答案不同，可能会影响到你是否想要使用该系统的决定。
Vitalik Buterin's website
• Vitalik Buterin's website
•  vbuterin
•  VitalikButerin
All content written by me is by default released freely under the WTFPL.

来自 <https://vitalik.ca/general/2020/08/20/trust.html> 


