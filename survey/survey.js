Survey.Survey.cssType = "bootstrap";

var surveyJSON = {pages:[{name:"intro_01",elements:[{type:"html",name:"question4",html:"<h4>Welcome to the Survey of Visualizing Uncertainty in Time Series Segmentation</h4>\n\n<p>\nThe evaluation is split up into three chapters, with two sessions measuring your performance, and ending with a questionnaire to tell us your preferences on specific visualization designs.\n</p>\n<p>\nThe two performance evaluations will test different visualizations to support you with:\n<ul>\n  <li>Finding sources of uncertainty.</li>\n  <li>Selecting the best result when uncertainty is present in the data.</li>\n</ul>\n</p>\n\n<h4>What does this mean?</h4>\n<p>Sometimes, data is affected by uncertainty. Showing this uncertainty to the end user (you!) allows them to assess if the results can be trusted. This is due to different factors. Uncertainty can be introduced (and also measured) at different levels:\n<ul>\n<li>At recording</li>\n<li>When modelling data</li>\n<li>During processing data</li>\n<li>When visualizing data</li>\n</ul>\nAs a result, we can visualize uncertainty at different levels, which gives us insights if problems exist at certain states of the data.</p>\n<h4>The data</h4>\n<img width='800px' src='https://christianbors.github.io/images/dimensions.png' />\n<p>\nLet us give an example of uncertainty introduced in data.\nWe want to analyze multivariate time series, so a time series with multiple dimensions. Analyzing every dimension at once is difficult, making sense of the data is not feasible. However, we can automatically analyze the time series, by applying processing and segmenting algorithms. \n</p>\n<img width='800px' src='https://christianbors.github.io/images/one_result.png' />\n<p>This yields a one-dimensional time series of segments.\nThe time series is broken down into logical segments by the algorithms, which can be analyzed by the user more easily. However, the segments are assigned labels with a certain probability, so there is uncertainty in the processing.\n</p>\n<img width='800px' src='https://christianbors.github.io/images/ts_segmentations.png' />\n<!-- <img width='200px' src='https://christianbors.github.io/images/labels.png' /> -->\n<p>Processing and segmentation algorithms do not work perfectly.\nSmall changes in parameters can influence probabilities, and produce very different results. A user must examine different segmentation results to find out which detects segments most accurately.\n<h4>Finding sources of uncertainty</h4>\n</p>\n<img width='800px' src='https://christianbors.github.io/images/probabilities.png' />\n<p>\nWe can visualize these probabilities, as shown in this view showing probabilities of different Segments over time.\nThe two frames (red and blue) show the segmentation algorithm detecting the same Segment (Purple line) in two points in time, but with different likelihood.\nEven though both segments show the purple line as the winner, the blue frame shows a less significant result, implying that this segment is less certain.\n</p>\n<p>\nThis should serve as an example how uncertainties in segmentations and also across different results can be different.\n</p>\n<h4>Selecting the best result when uncertainty is present in the data</h4>\n<p>Finding an optimal result depends on your analysis task. If you want the segmentation algorithm to detect a certain segment more accurately, high uncertainty in other parts of the data might not be interesting to you. So always consider what the goal of your analysis is!</p>\n<img width='800px' src='https://christianbors.github.io/images/todo.png' />\n<p>E.g., if you want to detect the highlighted segment with low uncertainty, you would prefer Result A over Result B, even though the rest of the segments are detected with high uncertainty.</p>"}],title:"Introduction"},{name:"disambiguation_q1",elements:[{type:"radiogroup",name:"question6",title:"Out of the highlighted (red frame) segments, which is the most certain?",correctAnswer:["item1"],choices:[{value:"item1",text:"Frame A"},{value:"item2",text:"Frame B"},{value:"item3",text:"Frame C"}]},{type:"html",name:"question1",html:"<p>You can adjust the uncertainty threshold level with the slider from 0.0 to 1.0</p>\n<iframe width=\"100%\" height=\"600\" id=\"block__iframe\" scrolling=\"no\" data-reactid=\".0.0.1.0.0.1\" sandbox=\"allow-scripts allow-top-navigation allow-popups allow-same-origin\" src=\"https://christianbors.github.io/slider.html\" allowfullscreen=\"allowfullscreen\" allowpaymentrequest frameborder=\"0\"></iframe>\n<!-- <iframe width=\"100%\" height=\"600\" src=\"//jsfiddle.net/qxnku937/1/show\" allowfullscreen=\"allowfullscreen\" allowpaymentrequest frameborder=\"0\"></iframe> -->"}]},{name:"gradient_q1",elements:[{type:"radiogroup",name:"question2",title:"Out of the highlighted (red frame) segments, which is the most certain?",correctAnswer:["item1"],choices:[{value:"item1",text:"Frame A"},{value:"item2",text:"Frame B"},{value:"item3",text:"Frame C"}]},{type:"html",name:"question3",html:"<img width='100%' src='https://christianbors.github.io/images/gradient_0.png' />"}]},{name:"disambiguation_q2",elements:[{type:"radiogroup",name:"question7",title:"Out of the highlighted (red frame) segments, which is the most certain?",correctAnswer:["item2"],choices:[{value:"item1",text:"Frame A"},{value:"item2",text:"Frame B"},{value:"item3",text:"Frame C"}]},{type:"html",name:"question8",html:"<p>You can adjust the uncertainty threshold level with the slider from 0.0 to 1.0</p>\n<iframe width=\"100%\" height=\"600\" id=\"block__iframe\" scrolling=\"no\" data-reactid=\".0.0.1.0.0.1\" sandbox=\"allow-scripts allow-top-navigation allow-popups allow-same-origin\" src=\"https://christianbors.github.io/slider_list.html\" allowfullscreen=\"allowfullscreen\" allowpaymentrequest frameborder=\"0\"></iframe>\n<!-- <iframe width=\"100%\" height=\"600\" src=\"//jsfiddle.net/qxnku937/1/show\" allowfullscreen=\"allowfullscreen\" allowpaymentrequest frameborder=\"0\"></iframe> -->"}]},{name:"intro_02",elements:[{type:"html",name:"question5"}],title:"Introduction - Understanding the Tasks"}],showProgressBar:"bottom",firstPageIsStarted:true}

function sendDataToServer(survey) {
    survey.sendResult('a7addf27-87cb-47e2-bda8-a07a37b0ca76');
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});