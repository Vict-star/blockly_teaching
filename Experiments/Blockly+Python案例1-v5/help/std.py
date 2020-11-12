import copy
def plan_divide_list(li) :
  tmp = [i for i in li if li[i]["pre"] == 0]
  res = dict([[i , li.pop(i)] for i in tmp])
  #print(res)
  return res

def plan_deal(it, li) :
  for j in it["nxt"]:
    li[j]["pre"] = li[j]["pre"] - 1

source_list = {  "1": {"nxt":["2", "3"], "pre" : 0},
  "2": {"nxt":["6"], "pre":1},
  "3": {"nxt":["5","8"], "pre":2},
  "4": {"nxt":["3"], "pre":0},
  "5": {"nxt":["6"],"pre":1},
  "6": {"nxt":[],"pre":2},
  "7": {"nxt":["8"],"pre":0},
  "8": {"nxt":["9"],"pre":2},
  "9": {"nxt":[], "pre":1}}

answer_list = []
remain_list = copy.deepcopy(source_list)
x = plan_divide_list(remain_list)
while (len(x) != 0):
  for i in x:
    plan_deal(x[i], remain_list)
    answer_list.append(i)
  x = plan_divide_list(remain_list)
  
print(answer_list)