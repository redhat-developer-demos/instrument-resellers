

export BRASS_ROUTE=`oc get route bettysbrass -n bettysbrass -o jsonpath='{"http://"}{.spec.host}'` && echo $BRASS_ROUTE

export CLARINET_ROUTE=`oc get route clydesclarinets -n clydesclarinets -o jsonpath='{"http://"}{.spec.host}'` && echo $CLARINET_ROUTE

export SAXOPHONE_ROUTE=`oc get route sidneyssaxes -n sidneyssaxes -o jsonpath='{"http://"}{.spec.host}'` && echo $SAXOPHONE_ROUTE


