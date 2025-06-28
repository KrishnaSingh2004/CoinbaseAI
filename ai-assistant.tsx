import { useQuery } from "@tanstack/react-query";
                      <div className="flex items-center space-x-2 mb-3">
                        <i className={`${getSentimentIcon(insight.sentiment)} ${getSentimentColor(insight.sentiment)}`}></i>
                        <span className={`font-medium ${getSentimentColor(insight.sentiment)}`}>
                          {insight.title}
                        </span>
                      </div>
                      <p className="text-slate-300 text-sm">{insight.content}</p>
                    </div>
                  ))}
                </div>

                {/* Personalized Recommendations */}
                <div className="space-y-4">
                  <h4 className="font-medium text-slate-300">Personalized Recommendations</h4>
                  {insights?.filter((insight: any) => ["recommendation", "security"].includes(insight.type)).map((insight: any) => (
                    <div key={insight.id} className="bg-slate-700/30 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <i className={`${getSentimentIcon(insight.sentiment)} ${getSentimentColor(insight.sentiment)}`}></i>
                        <span className={`font-medium ${getSentimentColor(insight.sentiment)}`}>
                          {insight.title}
                        </span>
                      </div>
                      <p className="text-slate-300 text-sm">{insight.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
